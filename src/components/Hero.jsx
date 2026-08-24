import React from "react";
import theme from "../constants/theme";
import Illustration from "../assets/images/llustration.svg";

const { colors } = theme;

export default function Hero() {
  return (
    <section className="max-w-[1160px] mx-auto px-5 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-28">
  <div className="grid md:grid-cols-2 items-center gap-12 lg:gap-14">

    <div>
      <h1
        className="text-[34px] sm:text-[42px] lg:text-[52px] leading-[1.25] font-semibold"
        style={{ color: colors.heading }}
      >
        Want anything to be easy with{" "}
        <span className="font-bold">LaslesVPN.</span>
      </h1>

      <p
        className="mt-6 sm:mt-7 text-[16px] sm:text-[18px] font-medium leading-7 sm:leading-8 max-w-[560px]"
        style={{ color: colors.text }}
      >
        Provide a network for all your needs with ease and fun using
        LaslesVPN discover interesting features from us.
      </p>

      <a
        href="#pricing"
        className="mt-8 sm:mt-10 inline-block px-8 sm:px-10 py-4 text-[16px] sm:text-[18px] font-bold rounded-[10px] transition-all duration-300"
        style={{
          backgroundColor: colors.primary,
          color: colors.white,
          boxShadow: `0 10px 20px ${colors.primary}40`,
        }}
      >
        Get Started
      </a>
    </div>

    <div className="flex justify-center md:justify-end">
      <img
        src={Illustration}
        alt="LaslesVPN"
        className="w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[570px]"
      />
    </div>

  </div>
</section>
  );
}