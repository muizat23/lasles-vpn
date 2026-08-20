import theme from "../constants/theme";

const { colors } = theme;

export default function Subscribe() {
  return (
    <section className="w-full pb-16">
      <div className="max-w-[1060px] mx-auto px-6">
      <div className="flex w-full flex-col items-center justify-between gap-6 rounded-[10px] bg-white px-8 py-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:flex-row md:px-12 md:py-7">

        {/* Text */}
        <div className="text-center md:text-left">
          <h2
            className="text-[22px] font-medium leading-[1.4] md:text-[24px]"
            style={{ color: colors.heading }}
          >
            Subscribe Now for
            <br />
            Get Special Features!
          </h2>

          <p
            className="mt-2 text-[11px] leading-5"
            style={{ color: colors.text }}
          >
            Let's subscribe with us and find the fun.
          </p>
        </div>

        {/* Button */}
        <button
          className="rounded-[5px] px-8 py-4 text-[11px] font-bold text-white transition duration-300"
          style={{
            backgroundColor: colors.primary,
            boxShadow: `0 10px 20px rgba(245, 56, 85, 0.25)`,
          }}
        >
          Subscribe Now
        </button>

      </div>
      </div>
    </section>
  );
}