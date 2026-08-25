import React from "react";
import theme from "../constants/theme";
import Free from "../assets/images/Free.svg";
import { Link } from "react-router-dom";


const { colors } = theme;

const plans = [
  {
    name: "Free Plan",
    price: "Free",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
  },
  {
    name: "Standard Plan",
    price: "$9 / mo",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
  },
  {
    name: "Premium Plan",
    price: "$12 / mo",
    features: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="max-w-[1160px] mx-auto px-6 py-24">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2
          className="text-[40px] font-bold"
          style={{ color: colors.heading }}
        >
          Choose Your Plan
        </h2>

        <p
          className="mt-5 text-[18px] font-medium leading-8"
          style={{ color: colors.text }}
        >
          Let's choose the package that is best for you and explore it happily
          <br />
          and cheerfully.
        </p>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-10">
        {plans.map((plan) => (
          <PlanCard
            key={plan.name}
            plan={plan}
          />
        ))}
      </div>
    </section>
  );
}

function PlanCard({ plan }) {
  return (
    <div
      className="min-h-[620px] rounded-[14px] border-2 px-10 py-12 flex flex-col items-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
      style={{
        borderColor: "#DDDDDD",
      }}
    >

      {/* Plan image */}
      <div className="w-[170px] h-[140px] flex items-center justify-center">
        <img
          src={Free}
          alt=""
          className="w-[105px] h-[105px] object-contain"
        />
      </div>

      {/* Plan name */}
      <h3
        className="mt-8 text-[22px] font-semibold"
        style={{ color: colors.heading }}
      >
        {plan.name}
      </h3>

      {/* Features */}
      <div className="mt-10 w-full space-y-5">
        {plan.features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-4"
          >
            <span
              className="text-[18px] font-bold"
              style={{ color: colors.success }}
            >
              ✓
            </span>

            <span
              className="text-[16px] font-medium"
              style={{ color: colors.text }}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-auto text-center pt-10">

        {/* Price */}
        <p
          className="text-[24px] font-bold"
          style={{ color: colors.heading }}
        >
          {plan.price}
        </p>

        {/* Select button */}
        <Link
  to="/plan"
  className="mt-5 min-w-[170px] rounded-full border-2 px-8 py-3.5 text-[17px] font-semibold transition-all duration-300 text-center inline-block"
  style={{
    borderColor: colors.primary,
    color: colors.primary,
    backgroundColor: colors.white,
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = colors.primary;
    e.currentTarget.style.color = colors.white;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = colors.white;
    e.currentTarget.style.color = colors.primary;
  }}
>
  Select
</Link>

      </div>
    </div>
  );
}