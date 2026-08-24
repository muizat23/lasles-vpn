import React from "react";
import theme from "../constants/theme";
import Logo from "../assets/images/Logo.svg";

const { colors } = theme;

export default function Navbar() {
  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 shadow-sm"
      style={{ backgroundColor: colors.white }}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-[90px]">
        <div className="flex items-center justify-between h-full">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="LaslesVPN"
              className="w-[155px] h-auto"
            />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#about"
              className="text-[17px] font-medium hover:underline underline-offset-4 decoration-2 transition-all duration-300"
              style={{ color: colors.text }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.text;
              }}
            >
              About
            </a>

            <a
              href="#features"
              className="text-[17px] font-medium hover:underline underline-offset-4 decoration-2 transition-all duration-300"
              style={{ color: colors.text }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.text;
              }}
            >
              Features
            </a>

            <a
              href="#pricing"
              className="text-[17px] font-medium hover:underline underline-offset-4 decoration-2 transition-all duration-300"
              style={{ color: colors.text }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.text;
              }}
            >
              Pricing
            </a>

            <a
              href="#testimonials"
              className="text-[17px] font-medium hover:underline underline-offset-4 decoration-2 transition-all duration-300"
              style={{ color: colors.text }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.text;
              }}
            >
              Testimonials
            </a>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center gap-7">

            {/* Sign In */}
            <button
              className="text-[17px] font-semibold transition-colors duration-300"
              style={{ color: colors.heading }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.heading;
              }}
            >
              Sign In
            </button>
<a
  href="#pricing"
  className="text-[17px] font-semibold rounded-full px-8 py-3 border-2 transition-all duration-300"
  style={{
    color: colors.primary,
    borderColor: colors.primary,
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = colors.primary;
    e.currentTarget.style.color = colors.white;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = colors.white;
    e.currentTarget.style.color = colors.primary;
  }}
>
  Sign Up
</a>

          </div>

        </div>
      </div>
    </nav>
  );
}