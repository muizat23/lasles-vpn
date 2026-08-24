import theme from "../constants/theme";

const { colors } = theme;

export default function Subscribe() {
  return (
    <section className="w-full pb-24">
      <div className="max-w-[1060px] mx-auto px-6">

        <div
          className="flex w-full flex-col items-center justify-between gap-8 rounded-[14px] bg-white px-8 py-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] md:flex-row md:px-12 md:py-10"
        >

          {/* Text */}
          <div className="text-center md:text-left">
            <h2
              className="text-[36px] font-semibold leading-[1.3]"
              style={{ color: colors.heading }}
            >
              Subscribe Now for
              <br />
              Get Special Features!
            </h2>

            <p
              className="mt-4 text-[17px] font-medium leading-7"
              style={{ color: colors.text }}
            >
              Let's subscribe with us and find the fun.
            </p>
          </div>

          {/* Button */}
          <button
            className="rounded-[10px] px-9 py-4 text-[17px] font-bold transition-all duration-300"
            style={{
              backgroundColor: colors.primary,
              color: colors.white,
              boxShadow: `0 12px 25px ${colors.primary}40`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                `0 16px 32px ${colors.primary}66`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                `0 12px 25px ${colors.primary}40`;
            }}
          >
            Subscribe Now
          </button>

        </div>

      </div>
    </section>
  );
}