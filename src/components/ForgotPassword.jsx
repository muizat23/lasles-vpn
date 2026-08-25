import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import theme from "../constants/theme";
import { supabase } from "../lib/supabase";

const { colors } = theme;

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    setLoading(false);

    if (error) {
      console.error("Password reset error:", error);
      setError(error.message);
      return;
    }

    setSubmitted(true);
  };

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
              Forgot Password?
            </h1>

            <p
              className="mt-3 text-[15px] md:text-[16px] leading-7"
              style={{ color: colors.text }}
            >
              Enter your email address and we'll help you reset your
              password.
            </p>
          </div>

          {/* Form */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-8">

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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-[8px] border border-[#DDDDDD] px-4 py-3.5 text-[15px] outline-none transition-all duration-300 focus:border-[#F53855]"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="mt-4 text-center text-[14px] text-red-500">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-7 rounded-[8px] py-4 text-[16px] font-bold text-white transition-all duration-300 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: colors.primary,
                  boxShadow: `0 12px 25px ${colors.primary}40`,
                }}
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>

            </form>
          ) : (
            /* Success */
            <div className="mt-8 text-center">

              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-2xl"
                style={{
                  backgroundColor: `${colors.primary}15`,
                  color: colors.primary,
                }}
              >
                ✓
              </div>

              <h2
                className="mt-5 text-[20px] font-semibold"
                style={{ color: colors.heading }}
              >
                Check your email
              </h2>

              <p
                className="mt-3 text-[15px] leading-7"
                style={{ color: colors.text }}
              >
                If an account exists for{" "}
                <span className="font-semibold">{email}</span>, we've sent
                instructions to reset your password.
              </p>

            </div>
          )}

          {/* Back to Sign In */}
          <div className="text-center mt-7">
            <Link
              to="/signin"
              className="text-[15px] font-semibold"
              style={{ color: colors.primary }}
            >
              ← Back to Sign In
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}