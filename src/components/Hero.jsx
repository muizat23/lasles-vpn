import React from "react";
import theme from "../constants/theme";
import Illustration from "../assets/images/llustration.svg";

const { colors } = theme;

export default function Hero() {
  return (
    <section className="max-w-[1160px] mx-auto px-6 pt-32 pb-28">
      <div className="grid md:grid-cols-2 items-center gap-14">

        {/* Left side */}
        <div>
          <h1
            className="text-[52px] leading-[1.25] font-semibold"
            style={{ color: colors.heading }}
          >
            Want anything to be easy with{" "}
            <span className="font-bold">LaslesVPN.</span>
          </h1>

          <p
            className="mt-7 text-[18px] font-medium leading-8 max-w-[560px]"
            style={{ color: colors.text }}
          >
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>

          {/* Get Started */}
          <a
  href="#pricing"
  className="mt-10 inline-block px-10 py-4 rounded-[10px] text-[18px] font-bold transition-all duration-300"
  style={{
    backgroundColor: colors.primary,
    color: colors.white,
    boxShadow: `0 10px 20px ${colors.primary}40`,
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = `0 15px 30px ${colors.primary}66`;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = `0 10px 20px ${colors.primary}40`;
  }}
>
  Get Started
</a>
        </div>

        {/* Right side */}
        <div className="flex justify-end">
          <img
            src={Illustration}
            alt="LaslesVPN"
            className="w-full max-w-[570px]"
          />
        </div>

      </div>
    </section>
  );
}