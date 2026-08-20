import React from "react";
import theme from "../constants/theme";
import Illustration from '../assets/images/llustration.svg';


const { colors } = theme;

export default function Hero() {
  return (
    <section className="max-w-[1060px] mx-auto px-6 pt-14 pb-20">
      <div className="grid md:grid-cols-2 items-center gap-10">

        {/* Left side */}
        <div>
          <h1
            className="text-[38px] leading-[1.35] font-medium"
            style={{ color: colors.heading }}
          >
            Want anything to be easy with{" "}
            <span className="font-bold">LaslesVPN.</span>
          </h1>

          <p
            className="mt-5 text-[14px] leading-7 max-w-[500px]"
            style={{ color: colors.text }}
          >
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>

          <button
            className="mt-8 px-14 py-4 rounded-[10px] text-sm font-bold text-white shadow-lg"
            style={{
              backgroundColor: colors.primary,
              boxShadow: `0 15px 30px rgba(245, 56, 85, 0.25)`,
            }}
          >
            Get Started
          </button>
        </div>

        {/* Right side */}
        <div className="flex justify-end">
          <img
            src={Illustration}
            alt="LaslesVPN"
            className="w-full max-w-[520px]"
          />
        </div>

      </div>
    </section>
  );
}