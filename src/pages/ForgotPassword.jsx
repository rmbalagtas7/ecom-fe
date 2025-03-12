import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import forgotPasswordImg from "../assets/forgotpassword.jpg";
import { requestResetPassword } from "../services/UserService";
import Modal from "../components/Modal";
import { useState } from "react";
const ForgotPassword = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await requestResetPassword(values.email);
        setIsOpen(true);
        setTitle(response);
        console.log("Email submitted:", values);
      } catch (error) {
        console.error("Email error:", error);
      }
    },
  });
  return (
    <>
      {" "}
      <div className="flex justify-center items-center min-h-screen bg-white px-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full text-center">
        <img src={forgotPasswordImg}></img>

          <h2 className="text-2xl font-bold text-gray-900 mb-1">Forgot your password?</h2>

          <p className="text-gray-600 mb-4">
            That's okay! Just enter your email address below and we'll send you a link to reset your password.
          </p>
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-900 float-left mb-2">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>
          <button type="submit" className="mt-4 w-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-semibold py-3 rounded-md">
            Send OTP to Email
          </button>
          </form>
        </div>
         <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} text={title} />
      </div>
    </>
  );
};

export default ForgotPassword;
