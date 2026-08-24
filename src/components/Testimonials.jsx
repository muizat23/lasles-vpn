import React, { useState } from "react";
import theme from "../constants/theme";
import Ellipse from "../assets/images/Ellipse 175.svg";
import Ellipse2 from "../assets/images/Ellipse 175 (1).svg";
import Ellipse3 from "../assets/images/Ellipse 175 (2).svg";

const { colors } = theme;

const baseTestimonials = [
  {
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    image: Ellipse,
    text: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
  },
  {
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "4.5",
    image: Ellipse2,
    text: "I like it because I like to travel far and still can connect with high speed.",
  },
  {
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: "4.5",
    image: Ellipse3,
    text: "This is very unusual for my business that currently requires a virtual private network that has high security.",
  },
];

const testimonials = [...baseTestimonials, ...baseTestimonials];
const PAGE_SIZE = 3;
const totalPages = Math.ceil(testimonials.length / PAGE_SIZE);

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(0);

  const goToPrev = () => {
    setPage((p) => Math.max(0, p - 1));
  };

  const goToNext = () => {
    setPage((p) => Math.min(totalPages - 1, p + 1));
  };

  return (
    <section className="w-full bg-white pt-20 pb-0">
      {/* Heading */}
      <div className="text-center px-6">
        <h2
          className="text-[32px] md:text-[40px] leading-[1.3] font-medium"
          style={{ color: colors.heading }}
        >
          Trusted by Thousands
          <br />
          of Happy Customer
        </h2>

        <p
          className="mt-5 md:mt-6 text-[16px] md:text-[18px] font-medium leading-7 md:leading-8"
          style={{ color: colors.text }}
        >
          These are the stories of our customers who have joined us with great
          <br className="hidden md:block" />
          pleasure when using this crazy feature.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1160px] mx-auto px-3 md:px-6 mt-10 md:mt-14">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${totalPages * 100}%`,
              transform: `translateX(-${page * (100 / totalPages)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="shrink-0 px-2 md:px-3"
                style={{
                  width: `${100 / testimonials.length}%`,
                }}
              >
                <TestimonialCard
                  testimonial={testimonial}
                  active={index === selected}
                  onClick={() => setSelected(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8 md:mt-10">
          {/* Dots */}
          <div className="flex items-center gap-2 md:gap-3">
            {Array.from({ length: totalPages }).map((_, dotIndex) => (
              <span
                key={dotIndex}
                onClick={() => setPage(dotIndex)}
                className={`rounded-full cursor-pointer ${
                  dotIndex === page
                    ? "w-8 md:w-10 h-2.5 md:h-3"
                    : "w-2.5 md:w-3 h-2.5 md:h-3"
                }`}
                style={{
                  backgroundColor:
                    dotIndex === page
                      ? colors.primary
                      : "#DDE0E4",
                }}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3 md:gap-5">
            <button
              onClick={goToPrev}
              disabled={page === 0}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center text-xl md:text-2xl transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                borderColor: colors.primary,
                color: colors.primary,
              }}
            >
              ←
            </button>

            <button
              onClick={goToNext}
              disabled={page === totalPages - 1}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{
                backgroundColor: colors.primary,
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, active, onClick }) {
  const [hovered, setHovered] = useState(false);
  const highlighted = active || hovered;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="min-h-[300px] md:min-h-[320px] h-auto rounded-[14px] p-5 md:p-8 flex flex-col cursor-pointer transition-all duration-200"
      style={{
        borderWidth: active ? "2px" : "1px",
        borderStyle: "solid",
        borderColor: highlighted ? colors.primary : "#DDDDDD",
      }}
    >
      {/* Customer */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 md:gap-5 min-w-0">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover shrink-0"
          />

          <div className="min-w-0">
            <h3
              className="text-[15px] md:text-[18px] font-bold truncate"
              style={{ color: colors.heading }}
            >
              {testimonial.name}
            </h3>

            <p
              className="text-[12px] md:text-[14px] font-medium mt-1 md:mt-2"
              style={{ color: colors.text }}
            >
              {testimonial.location}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 shrink-0">
          <span
            className="text-[14px] md:text-[16px] font-medium"
            style={{ color: colors.heading }}
          >
            {testimonial.rating}
          </span>

          <span
            className="text-[16px] md:text-[18px]"
            style={{ color: colors.primary }}
          >
            ★
          </span>
        </div>
      </div>

      {/* Review */}
      <p
        className="mt-6 md:mt-8 text-[14px] md:text-[16px] font-medium leading-7 md:leading-8"
        style={{ color: colors.heading }}
      >
        "{testimonial.text}"
      </p>
    </div>
  );
}