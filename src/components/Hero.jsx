import React from "react";
import theme from "../constants/theme";
import Illustration from "../assets/images/llustration.svg";

const { colors } = theme;

export default function Hero() {
  return (
    <section className="max-w-[1160px] mx-auto px-5 sm:px-6 pt-[100px] md:pt-32 pb-20 md:pb-28">
      <div className="flex flex-col md:grid md:grid-cols-2 items-center gap-10 md:gap-14">

        {/* Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end w-full">
          <img
            src={Illustration}
            alt="LaslesVPN"
            className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[570px]"
          />
        </div>

        {/* Text */}
        <div className="order-2 md:order-1 text-left w-full">

          <h1
            className="text-[34px] sm:text-[42px] md:text-[52px] leading-[1.25] font-semibold"
            style={{ color: colors.heading }}
          >
            Want anything to be easy with{" "}
            <span className="font-bold">LaslesVPN.</span>
          </h1>

          <p
            className="mt-6 md:mt-7 text-[16px] sm:text-[17px] md:text-[18px] font-medium leading-7 md:leading-8 max-w-[560px]"
            style={{ color: colors.text }}
          >
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>

          {/* Get Started */}
          <a
            href="#pricing"
            className="mt-8 md:mt-10 inline-block px-9 sm:px-10 py-4 text-[16px] sm:text-[17px] md:text-[18px] font-bold rounded-[10px] transition-all duration-300"
            style={{
              backgroundColor: colors.primary,
              color: colors.white,
              boxShadow: `0 10px 20px ${colors.primary}40`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                `0 15px 30px ${colors.primary}66`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                `0 10px 20px ${colors.primary}40`;
            }}
          >
            Get Started
          </a>

        </div>

      </div>
    </section>
  );
}