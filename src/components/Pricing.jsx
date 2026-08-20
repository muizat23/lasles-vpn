import React from "react";
import theme from "../constants/theme";
import Free from '../assets/images/Free.svg';

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
    <section className="max-w-[1060px] mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2
          className="text-[28px] font-bold"
          style={{ color: colors.heading }}
        >
          Choose Your Plan
        </h2>

        <p
          className="mt-4 text-[13px] leading-6"
          style={{ color: colors.text }}
        >
          Let's choose the package that is best for you and explore it happily
          <br />
          and cheerfully.
        </p>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            premium={index === 2}
          />
        ))}
      </div>
    </section>
  );
}

function PlanCard({ plan, premium }) {
  return (
    <div
      className="min-h-[570px] rounded-[10px] border px-8 py-10 flex flex-col items-center"
      style={{
        borderColor: premium ? colors.primary : "#DDDDDD",
      }}
    >
      {/* Plan image */}
      <div className="w-[145px] h-[120px] flex items-center justify-center">
        <img src={Free} alt="" className="w-20 h-20 object-contain" />
      </div>

      <h3
        className="mt-6 text-[16px] font-medium"
        style={{ color: colors.heading }}
      >
        {plan.name}
      </h3>

      {/* Features */}
      <div className="mt-8 w-full space-y-4">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <span
              className="text-[12px]"
              style={{ color: colors.success }}
            >
              ✓
            </span>

            <span
              className="text-[12px]"
              style={{ color: colors.text }}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-auto text-center">
        <p
          className="text-[16px] font-bold"
          style={{ color: colors.heading }}
        >
          {plan.price}
        </p>

        <button
          className="mt-4 min-w-[130px] rounded-full border px-8 py-2 text-[12px] font-medium"
          style={{
            borderColor: colors.primary,
            color: premium ? colors.white : colors.primary,
            backgroundColor: premium ? colors.primary : colors.white,
          }}
        >
          Select
        </button>
      </div>
    </div>
  );
}