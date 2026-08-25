import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import theme from "../constants/theme";
import { supabase } from "../lib/supabase";

const { colors } = theme;

export default function ResetPassword() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess(true);
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

          {!success ? (
            <>
              {/* Heading */}
              <div className="text-center">
                <h1
                  className="text-[30px] md:text-[34px] font-semibold"
                  style={{ color: colors.heading }}
                >
                  Reset Password
                </h1>

                <p
                  className="mt-3 text-[15px] md:text-[16px] leading-7"
                  style={{ color: colors.text }}
                >
                  Enter your new password below.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8">

                {/* New Password */}
                <div>
                  <label
                    className="block mb-2 text-[15px] font-medium"
                    style={{ color: colors.heading }}
                  >
                    New Password
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter new password"
                      required
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
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                      required
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

                {/* Error */}
                {error && (
                  <p className="mt-4 text-center text-[14px] text-red-500">
                    {error}
                  </p>
                )}

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-7 rounded-[8px] py-4 text-[16px] font-bold text-white transition-all duration-300 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: colors.primary,
                    boxShadow: `0 12px 25px ${colors.primary}40`,
                  }}
                >
                  {loading ? "Updating..." : "Update Password"}
                </button>

              </form>
            </>
          ) : (
            /* Success */
            <div className="text-center">

              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-2xl"
                style={{
                  backgroundColor: `${colors.primary}15`,
                  color: colors.primary,
                }}
              >
                ✓
              </div>

              <h1
                className="mt-5 text-[25px] font-semibold"
                style={{ color: colors.heading }}
              >
                Password Updated!
              </h1>

              <p
                className="mt-3 text-[15px] leading-7"
                style={{ color: colors.text }}
              >
                Your password has been successfully changed.
              </p>

              <button
                onClick={() => navigate("/signin")}
                className="w-full mt-7 rounded-[8px] py-4 text-[16px] font-bold text-white transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: colors.primary,
                  boxShadow: `0 12px 25px ${colors.primary}40`,
                }}
              >
                Go to Sign In
              </button>

            </div>
          )}

          {!success && (
            <div className="text-center mt-7">
              <Link
                to="/signin"
                className="text-[15px] font-semibold"
                style={{ color: colors.primary }}
              >
                ← Back to Sign In
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}