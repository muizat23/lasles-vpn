import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";
import theme from "../constants/theme";

const { colors } = theme;

export default function Plan() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <header className="border-b border-[#EEEEEE]">
        <div className="max-w-[1160px] mx-auto px-6 py-6 flex items-center justify-between">
          <img
            src={Logo}
            alt="LaslesVPN"
            className="w-[145px]"
          />

          <Link
            to="/"
            className="font-semibold"
            style={{ color: colors.primary }}
          >
            ← Back Home
          </Link>
        </div>
      </header>

      {/* Dummy Plan Page */}
      <main className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="text-center max-w-[600px]">

          <div
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-2xl"
            style={{
              backgroundColor: `${colors.primary}15`,
              color: colors.primary,
            }}
          >
            ✓
          </div>

          <h1
            className="text-[36px] md:text-[44px] font-semibold"
            style={{ color: colors.heading }}
          >
            Plan Selected
          </h1>

          <p
            className="mt-5 text-[17px] leading-8"
            style={{ color: colors.text }}
          >
            You have selected a LaslesVPN plan. This is a demo page for now.
            Payment and subscription features will be added later.
          </p>

          <Link
            to="/"
            className="inline-block mt-8 rounded-[10px] px-10 py-4 font-bold text-white"
            style={{
              backgroundColor: colors.primary,
              boxShadow: `0 12px 25px ${colors.primary}40`,
            }}
          >
            Back to Home
          </Link>

        </div>
      </main>
    </div>
  );
}