import React, { useState, useRef, use, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp, resendOtp } from "../services/UserService";
import Modal from "../components/Modal.jsx";


const OtpPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(''); 
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  },[]);
  
  
  const formatCountdown = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const maskEmail = (email) => {
  if (!email.includes("@")) return email; // Return as is if invalid
  const [user, domain] = email.split("@");
  const maskedUser = user.length > 2 ? `${user[0]}**${user.slice(-1)}` : user[0] + "**";
  return `${maskedUser}@${domain}`;
  };

  const email = location.state?.email || "";
  const maskedEmail = maskEmail(email);

  const handleChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus(); // Move to next input
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus(); // Move to previous input
    }
  };

  const handleVerify = async () => {
    if (otp.includes("")) {
      setError("Please enter the full OTP");
    } else {
      setError("");
      const response = await verifyOtp(email, otp.join(""));
      console.log(response);
      if (response === "OTP Verified successfully!") {
        setIsOpen(true);
        setTitle(response);
      } else {
        setError(response);
      }
    }
  }

  const handleResend = async () => {
    const response = await resendOtp(email);
    console.log(response)
    if (response === "A new OTP has been sent to your email.") {
      setIsOpen(true);
    }
    else {
        setError(response);
    }
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0].focus();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold text-gray-900">Email Verification</h2>
       
        <p className="text-gray-600 mb-4">
          We have sent a code to your email <span className="font-medium">{maskedEmail}</span>
        </p>
        <div className="flex justify-center gap-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-10 h-10 text-center text-xl border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:w-12 sm:h-12"
            />
          ))}
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button
          onClick={handleVerify}
          className="mt-4 w-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-semibold py-3 rounded-md"
        >
          Verify Account
        </button>
        
        <p className="text-sm text-gray-600 mt-4">Resend OTP in : <span className="text-yellow-600 font-medium">{formatCountdown(countdown)}</span></p>
        <p className="text-gray-600 mt-3 text-sm">
          Didn't receive code?{" "}
          <button onClick={handleResend} className="text-yellow-600 font-medium hover:underline">
            Resend
          </button>
        </p>

        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} text={title} />
      </div>
    </div>
  );
};

export default OtpPage;
