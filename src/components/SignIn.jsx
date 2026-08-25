import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import theme from "../constants/theme";
import { supabase } from "../lib/supabase";

const { colors } = theme;

export default function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!form.email || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const { error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      });

      if (error) {
        throw error;
      }

      navigate("/");
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
              Welcome Back
            </h1>

            <p
              className="mt-3 text-[15px] md:text-[16px]"
              style={{ color: colors.text }}
            >
              Sign in to your LaslesVPN account
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mt-6 rounded-[8px] bg-red-50 px-4 py-3 text-[14px] text-red-600">
              {error}
            </div>
          )}

          {/* Form */}
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
                  placeholder="Enter your password"
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

            {/* Forgot password */}
            <div className="flex justify-end mt-3">
              <button
                type="button"
                className="text-[14px] font-medium"
                style={{ color: colors.primary }}
              >
                Forgot password?
              </button>
            </div>

            {/* Sign In */}
            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 rounded-[8px] py-4 text-[16px] font-bold text-white transition-all duration-300 disabled:opacity-60"
              style={{
                backgroundColor: colors.primary,
                boxShadow: `0 12px 25px ${colors.primary}40`,
              }}
            >
              {loading ? "Signing In..." : "Sign In"}
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
              Sign Up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}