import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import theme from "../constants/theme";

const { colors } = theme;

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

        {/* Card */}
        <div className="rounded-[14px] border border-[#E5E5E5] bg-white px-6 py-8 md:px-10 md:py-10 shadow-[0_10px_35px_rgba(0,0,0,0.05)]">

          {/* Heading */}
          <div className="text-center">
            <h1
              className="text-[30px] md:text-[34px] font-semibold"
              style={{ color: colors.heading }}
            >
              Create an Account
            </h1>

            <p
              className="mt-3 text-[15px] md:text-[16px]"
              style={{ color: colors.text }}
            >
              Join LaslesVPN and enjoy secure browsing
            </p>
          </div>

          <form className="mt-8">

            {/* Name */}
            <div>
              <label
                className="block mb-2 text-[15px] font-medium"
                style={{ color: colors.heading }}
              >
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-[8px] border border-[#DDDDDD] px-4 py-3.5 text-[15px] outline-none transition-all duration-300 focus:border-[#F53855]"
              />
            </div>

            {/* Email */}
            <div className="mt-5">
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
                  placeholder="Create a password"
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

            {/* Confirm Password */}
            <div className="mt-5">
              <label
                className="block mb-2 text-[15px] font-medium"
                style={{ color: colors.heading }}
              >
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="w-full rounded-[8px] border border-[#DDDDDD] px-4 py-3.5 pr-16 text-[15px] outline-none transition-all duration-300 focus:border-[#F53855]"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[14px]"
                  style={{ color: colors.text }}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2 mt-5 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 mt-1 accent-[#F53855]"
              />

              <span
                className="text-[13px] leading-5"
                style={{ color: colors.text }}
              >
                I agree to the Terms of Service and Privacy Policy.
              </span>
            </label>

            {/* Sign Up */}
            <button
              type="submit"
              className="w-full mt-7 rounded-[8px] py-4 text-[16px] font-bold text-white transition-all duration-300 hover:opacity-90"
              style={{
                backgroundColor: colors.primary,
                boxShadow: `0 12px 25px ${colors.primary}40`,
              }}
            >
              Create Account
            </button>

          </form>

          {/* Sign In */}
          <p
            className="text-center mt-7 text-[14px] md:text-[15px]"
            style={{ color: colors.text }}
          >
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-semibold"
              style={{ color: colors.primary }}
            >
              Sign In
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}