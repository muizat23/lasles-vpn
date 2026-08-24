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
      <div className="max-w-[1160px] mx-auto px-5 sm:px-6 py-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={Logo}
              alt="LaslesVPN"
              className="w-[145px] sm:w-[155px] h-auto"
            />
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-10">

            <NavLink href="#about">About</NavLink>

            <NavLink href="#features">Features</NavLink>

            <NavLink href="#pricing">Pricing</NavLink>

            <NavLink href="#testimonials">Testimonials</NavLink>

          </div>

          {/* Auth buttons */}
          <div className="flex items-center justify-center gap-5">

            {/* Sign In */}
            <button
              className="text-[16px] sm:text-[17px] font-semibold transition-colors duration-300"
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

            {/* Sign Up */}
            <a
              href="#pricing"
              className="text-[16px] sm:text-[17px] font-semibold rounded-full px-7 sm:px-8 py-2.5 sm:py-3 border-2 transition-all duration-300"
              style={{
                color: colors.primary,
                borderColor: colors.primary,
                backgroundColor: colors.white,
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

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-[16px] sm:text-[17px] font-medium transition-colors duration-300"
      style={{ color: colors.text }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = colors.primary;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = colors.text;
      }}
    >
      {children}
    </a>
  );
}