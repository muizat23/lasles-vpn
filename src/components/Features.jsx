import React from "react";
import theme from "../constants/theme";
import FeaturesImage from "../assets/images/Illustration 2.svg";

const { colors } = theme;

export default function Features() {
  return (
    <section className="max-w-[1160px] mx-auto px-6 pt-28 pb-28">
      <div className="grid md:grid-cols-2 items-center gap-24">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={FeaturesImage}
            alt="LaslesVPN features"
            className="w-full max-w-[570px]"
          />
        </div>

        {/* Content */}
        <div>
          <h2
            className="text-[40px] leading-[1.3] font-bold"
            style={{ color: colors.heading }}
          >
            We Provide Many
            <br />
            Features You Can Use
          </h2>

          <p
            className="mt-7 text-[18px] font-medium leading-8 max-w-[520px]"
            style={{ color: colors.text }}
          >
            You can explore the features that we provide with fun and
            have their own functions each feature.
          </p>

          <div className="mt-9 space-y-5">

            <Feature text="Powerfull online protection." />

            <Feature text="Internet without borders." />

            <Feature text="Supercharged VPN" />

            <Feature text="No specific time limits." />

          </div>
        </div>

      </div>
    </section>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="w-[22px] h-[22px] rounded-full flex items-center justify-center text-white text-[12px] font-bold shrink-0"
        style={{ backgroundColor: colors.success }}
      >
        ✓
      </span>

      <span
        className="text-[17px] font-medium"
        style={{ color: colors.text }}
      >
        {text}
      </span>
    </div>
  );
}