import React from "react";
import theme from "../constants/theme";
import FeaturesImage from "../assets/images/Illustration 2.svg";

const { colors } = theme;

export default function Features() {
  return (
    <section className="max-w-[1060px] mx-auto px-6 pt-24 pb-24">
      <div className="grid md:grid-cols-2 items-center gap-20">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={FeaturesImage}
            alt="LaslesVPN features"
            className="w-full max-w-[500px]"
          />
        </div>

        {/* Content */}
        <div>
          <h2
            className="text-[28px] leading-[1.4] font-bold"
            style={{ color: colors.heading }}
          >
            We Provide Many
            <br />
            Features You Can Use
          </h2>

          <p
            className="mt-5 text-[13px] leading-7 max-w-[450px]"
            style={{ color: colors.text }}
          >
            You can explore the features that we provide with fun and
            have their own functions each feature.
          </p>

          <div className="mt-6 space-y-4">

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
    <div className="flex items-center gap-3">
      <span
        className="w-[18px] h-[18px] rounded-full flex items-center justify-center text-white text-[10px]"
        style={{ backgroundColor: colors.success }}
      >
        ✓
      </span>

      <span
        className="text-[13px]"
        style={{ color: colors.text }}
      >
        {text}
      </span>
    </div>
  );
}