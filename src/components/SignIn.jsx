import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import theme from "../constants/theme";

const { colors } = theme;

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-[460px]">

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src={Logo}
            alt="LaslesVPN"
            className="w-[150px]"
          />
        </div>

        {/* Sign In Card */}
        <div className="rounded-[14px] border border-[#E5E5E5] bg-white px-6 py-8 md:px-10 md:py-10 shadow-[0_10px_35px_rgba(0,0,0,0.05)]">

          {/* Heading */}
          <div className="text-center">
            <h1
              className="text-[30px] md:text-[34px] font-semibold"
              style={{ color: colors.heading }}
            >
              Welcome Back!
            </h1>

            <p
              className="mt-3 text-[15px] md:text-[16px]"
              style={{ color: colors.text }}
            >
              Sign in to continue to LaslesVPN
            </p>
          </div>

          {/* Form */}
          <form className="mt-8">

            {/* Email */}
            <div>
              <label
                className="block mb-2 text-[15px] font-medium"
                style={{ color: colors.heading }}
              >
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-[8px] border border-[#DDDDDD] px-4 py-3.5 text-[15px] outline-none transition-all duration-300 focus:border-[#F53855]"
              />
            </div>

            {/* Password */}
            <div className="mt-5">
              <label
                className="block mb-2 text-[15px] font-medium"
                style={{ color: colors.heading }}
              >
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-[8px] border border-[#DDDDDD] px-4 py-3.5 pr-16 text-[15px] outline-none transition-all duration-300 focus:border-[#F53855]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[14px]"
                  style={{ color: colors.text }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between mt-5 gap-3">

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-[#F53855]"
                />

                <span
                  className="text-[14px]"
                  style={{ color: colors.text }}
                >
                  Remember me
                </span>
              </label>

              <button
                type="button"
                className="text-[14px] font-medium"
                style={{ color: colors.primary }}
              >
                Forgot password?
              </button>

            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full mt-7 rounded-[8px] py-4 text-[16px] font-bold text-white transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: colors.primary,
                boxShadow: `0 12px 25px ${colors.primary}40`,
              }}
            >
              Sign In
            </button>

          </form>

          {/* Sign Up */}
          <p
            className="text-center mt-7 text-[14px] md:text-[15px]"
            style={{ color: colors.text }}
          >
            Don't have an account?{" "}

            <Link
              to="/signup"
              className="font-semibold"
              style={{ color: colors.primary }}
            >
              Create an account
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}