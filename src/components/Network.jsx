import React from "react";
import theme from "../constants/theme";
import HugeGlobal from "../assets/images/Huge Global.svg";

const { colors } = theme;

export default function Network() {
  return (
    <section className="max-w-[1160px] mx-auto px-6 pt-28 pb-28">

      {/* Heading */}
      <div className="text-center">
        <h2
          className="text-[40px] leading-[1.3] font-medium"
        >
          Huge Global Network <br/> of Fast VPN
        </h2>

        <p
          className="mt-7 text-[18px] font-medium leading-8"
          style={{ color: colors.text }}
        >
          See{" "}
          <span className="font-semibold">
            LaslesVPN
          </span>{" "}
          everywhere to make it easier for you when you move
          <br />
          locations.
        </p>
      </div>

      {/* Map */}
      <div className="mt-20 flex justify-center">
        <img
          src={HugeGlobal}
          alt="LaslesVPN global network"
          className="w-full max-w-[1050px]"
        />
      </div>

    </section>
  );
}