import React from "react";
import theme from "../constants/theme";
import Logo from '../assets/images/Logo.svg';

const { colors } = theme;

export default function Navbar() {
  return (
    <nav
      className="w-full"
      style={{ backgroundColor: colors.white }}
    >
      <div className="max-w-[1060px] mx-auto px-6 py-5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src={Logo}
              alt="LaslesVPN"
              className="w-[135px] h-auto"
            />
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-[12px]"
              style={{ color: colors.text }}
            >
              About
            </a>

            <a
              href="#"
              className="text-[12px]"
              style={{ color: colors.text }}
            >
              Features
            </a>

            <a
              href="#"
              className="text-[12px]"
              style={{ color: colors.text }}
            >
              Pricing
            </a>

            <a
              href="#"
              className="text-[12px]"
              style={{ color: colors.text }}
            >
              Testimonials
            </a>

            <a
              href="#"
              className="text-[12px]"
              style={{ color: colors.text }}
            >
              Help
            </a>
          </div>

          {/* Auth buttons */}
          <div className="flex items-center gap-5">
            <button
              className="text-[12px] font-medium"
              style={{ color: colors.heading }}
            >
              Sign In
            </button>

            <button
              className="text-[12px] font-medium rounded-full px-6 py-2 border"
              style={{
                color: colors.primary,
                borderColor: colors.primary,
              }}
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}