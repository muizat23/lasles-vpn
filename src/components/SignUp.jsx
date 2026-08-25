import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import theme from "../constants/theme";
import { supabase } from "../lib/supabase";

const { colors } = theme;

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            name: form.name,
          },
        },
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        setSuccess(
          "Account created successfully! Check your email to confirm your account."
        );
      }

      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
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
              Create Account
            </h1>

            <p
              className="mt-3 text-[15px] md:text-[16px]"
              style={{ color: colors.text }}
            >
              Create your LaslesVPN account
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-6 rounded-[8px] bg-red-50 px-4 py-3 text-[14px] text-red-600">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="mt-6 rounded-[8px] bg-green-50 px-4 py-3 text-[14px] text-green-600">
              {success}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8">

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
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-[8px] border border-[#DDDDDD] px-4 py-3.5 text-[15px] outline-none focus:border-[#F53855]"
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
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-[8px] border border-[#DDDDDD] px-4 py-3.5 text-[15px] outline-none focus:border-[#F53855]"
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
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full rounded-[8px] border border-[#DDDDDD] px-4 py-3.5 pr-16 text-[15px] outline-none focus:border-[#F53855]"
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
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full rounded-[8px] border border-[#DDDDDD] px-4 py-3.5 pr-16 text-[15px] outline-none focus:border-[#F53855]"
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

            {/* Sign Up */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-7 rounded-[8px] py-4 text-[16px] font-bold text-white transition-all duration-300 disabled:opacity-60"
              style={{
                backgroundColor: colors.primary,
                boxShadow: `0 12px 25px ${colors.primary}40`,
              }}
            >
              {loading ? "Creating Account..." : "Create Account"}
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