import React from "react";
import theme from "../constants/theme";
import Logo from "../assets/images/Logo.svg";

const { colors } = theme;

export default function Navbar() {
  return (
    <>
      {/* Top Navbar */}
      <nav
        className="w-full fixed top-0 left-0 z-50 shadow-sm"
        style={{ backgroundColor: colors.white }}
      >
        <div className="max-w-[1160px] mx-auto px-5 sm:px-6 h-[76px] md:h-[90px]">
          <div className="flex items-center justify-between h-full">

            {/* Logo */}
            <img
              src={Logo}
              alt="LaslesVPN"
              className="w-[140px] sm:w-[150px] md:w-[155px] h-auto"
            />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
            </div>

            {/* Auth */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                className="text-[15px] sm:text-[17px] font-semibold transition-colors duration-300"
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
                className="text-[15px] sm:text-[17px] font-semibold rounded-full px-5 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3 border-2 transition-all duration-300"
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

      {/* Mobile Bottom Navigation */}
      <div
        className="md:hidden fixed bottom-0 left-0 z-50 w-full bg-white border-t shadow-[0_-5px_20px_rgba(0,0,0,0.06)]"
      >
        <div className="grid grid-cols-4 h-[72px]">

          <MobileNavItem href="#about" icon="ⓘ" label="About" />

          <MobileNavItem href="#features" icon="◎" label="Feature" />

          <MobileNavItem href="#pricing" icon="$" label="Pricing" />

          <MobileNavItem href="#testimonials" icon="◌" label="Testimonial" />

        </div>
      </div>
    </>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-[17px] font-medium transition-colors duration-300"
      style={{ color: colors.text }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = colors.primary;
        e.currentTarget.style.textDecoration = "underline";
        e.currentTarget.style.textUnderlineOffset = "4px";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = colors.text;
        e.currentTarget.style.textDecoration = "none";
      }}
    >
      {children}
    </a>
  );
}

function MobileNavItem({ href, icon, label }) {
  return (
    <a
      href={href}
      className="flex flex-col items-center justify-center gap-1 text-[13px] font-medium transition-colors duration-300"
      style={{ color: colors.text }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = colors.primary;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = colors.text;
      }}
    >
      <span className="text-[24px] leading-none">
        {icon}
      </span>

      <span>{label}</span>
    </a>
  );
}