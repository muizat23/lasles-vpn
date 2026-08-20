import React from "react";
import theme from "../constants/theme";
import Group from '../assets/images/Group 1173.svg'

const { colors } = theme;

export default function Testimonials() {
  return (
    <section className="w-full bg-white pt-6 pb-2">

      {/* Heading */}
      {/* <div className="text-center">
        <h2
          className="text-[26px] leading-[1.4] font-bold"
          style={{ color: colors.heading }}
        >
          Trusted by Thousands of Happy Customer
        </h2>

        <p
          className="mt-4 text-[11px] leading-5"
          style={{ color: colors.text }}
        >
          These are the stories of our customers who have joined us with great
          <br />
          pleasure when using this crazy feature.
        </p>
      </div> */}

      {/* Cards */}
      <div className="max-w-[1060px] mx-auto px-6 mt-4">
        <img src={Group} alt="Joined by thousands of happy customers" className="w-full h-auto" />
      </div>
    </section>
  );
}