import theme from "../constants/theme";

const { colors } = theme;

export default function Subscribe() {
  return (
    <section className="w-full pb-12 md:pb-24">
      <div className="max-w-[1160px] mx-auto px-4 md:px-6">
        <div
          className="flex w-full flex-col items-center justify-between gap-7 md:gap-8 rounded-[14px] bg-white px-6 py-8 md:px-14 md:py-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] md:flex-row"
        >
          {/* Text */}
          <div className="text-center md:text-left">
            <h2
              className="text-[26px] md:text-[36px] font-semibold leading-[1.3]"
              style={{ color: colors.heading }}
            >
              Subscribe Now for
              <br />
              Get Special Features!
            </h2>

            <p
              className="mt-3 md:mt-4 text-[14px] md:text-[17px] font-medium leading-6 md:leading-7"
              style={{ color: colors.text }}
            >
              Let's subscribe with us and find the fun.
            </p>
          </div>

          {/* Button */}
         <a
  href="#pricing"
  className="rounded-[10px] px-10 py-5 text-[17px] font-bold transition-all duration-300"
  style={{
    backgroundColor: colors.primary,
    color: colors.white,
    boxShadow: `0 12px 25px ${colors.primary}40`,
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow = `0 16px 32px ${colors.primary}66`;
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow = `0 12px 25px ${colors.primary}40`;
  }}
>
  Subscribe Now
</a>
        </div>
      </div>
    </section>
  );
}