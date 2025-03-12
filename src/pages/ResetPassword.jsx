import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { resetPassword } from "../services/UserService";
import Modal from "../components/Modal";
import resetPasswordImg from "../assets/resetPasswordImg.jpg";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // Get token from URL
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("New password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await resetPassword(token, values.newPassword);
        setIsOpen(true);
        setTitle(response);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } catch (error) {
        console.error("Password reset error:", error);
        setIsOpen(true);
        setTitle(error.response?.data || "Something went wrong");
      }
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full text-center">
        <img src={resetPasswordImg} alt="Reset Password" className="mb-4" />

        <h2 className="text-2xl font-bold text-gray-900 mb-1">Reset Password</h2>

        <p className="text-gray-600 mb-4">Enter your new password below.</p>

        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-900 float-left mb-2">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formik.touched.newPassword && formik.errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.newPassword}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 float-left mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-white font-semibold py-3 rounded-md"
          >
            Reset Password
          </button>
        </form>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} text={title} />
    </div>
  );
};

export default ResetPassword;
