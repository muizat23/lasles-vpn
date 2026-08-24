import React from "react";
import Sponsored from "../assets/images/Sponsored.svg";

export default function Sponsors() {
  return (
<section className="max-w-[1060px] mx-auto px-6 py-2">     
   <div className="max-w-[1060px] mx-auto px-6 overflow-x-auto scrollbar-hide">
        <img
          src={Sponsored}
          alt="Sponsored by Netflix, Reddit, Amazon, Discord and Spotify"
          className="w-[900px] max-w-none h-auto"
        />
      </div>
    </section>
  );
}