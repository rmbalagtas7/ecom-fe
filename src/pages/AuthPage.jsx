import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../assets/logo.png";
import { login } from "../services/UserService";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await login(values);
        console.log("User logged in:", response);
        //navigate("/");
      } catch (error) {
        console.error("Login error:", error);
      }
    },
  });

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="hidden lg:flex w-1/2 bg-gray-100 justify-center items-center p-10">
        <div className="text-center max-w-md">
          <img src={logo} alt="Company Logo" className="h-24 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back</h2>
          <p className="text-gray-600">Sign in to continue accessing our amazing services.</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-6 py-12">
        <div className="sm:w-full sm:max-w-md">
          <img alt="Your Company" src={logo} className="mx-auto h-12 w-auto" />
          <h2 className="mt-8 text-center text-2xl font-bold text-gray-900">Sign In</h2>
        </div>

        <div className="mt-8 sm:w-full sm:max-w-md">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-900">Email address</label>
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

            <div>
              <label className="block text-sm font-medium text-gray-900">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
              )}
            </div>
            
            <Link to="/auth/forgot-password" className="text-yellow-600 float-end font-normal cursor">Forgot Password?</Link>
            <button
              type="submit"
              className="w-full rounded-md bg-gradient-to-r from-[#d4af37] to-[#b8860b] px-3 py-2 text-white font-semibold shadow-md hover:opacity-90"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
