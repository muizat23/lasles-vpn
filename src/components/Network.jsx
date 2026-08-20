import React from "react";
import theme from "../constants/theme";
import HugeGlobal from "../assets/images/Huge Global.svg";

const { colors } = theme;

export default function Network() {
  return (
    <section className="max-w-[1060px] mx-auto px-6 pt-20 pb-24">
      {/* Heading */}
      <div className="text-center">
        <h2
          className="text-[28px] leading-[1.4] font-bold"
          style={{ color: colors.heading }}
        >
          Huge Global Network
        </h2>

        <p
          className="mt-5 text-[13px] leading-6"
          style={{ color: colors.text }}
        >
          See{" "}
          <span className="font-medium">
            LaslesVPN
          </span>{" "}
          everywhere to make it easier for you when you move
          <br />
          locations.
        </p>
      </div>

      {/* Map */}
      <div className="mt-16 flex justify-center">
        <img
          src={HugeGlobal}
          alt="LaslesVPN global network"
          className="w-full max-w-[900px]"
        />
      </div>
    </section>
  );
}