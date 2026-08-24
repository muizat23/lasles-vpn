import Logo from "../assets/images/Logo.svg";
import theme from "../constants/theme";

const { colors } = theme;

export default function Footer() {
  return (
    <footer
      className="w-full pt-20 pb-14"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <div className="mx-auto flex max-w-[1160px] flex-col justify-between gap-16 px-6 md:flex-row">

        {/* Brand */}
        <div className="max-w-[380px]">
          <img
            src={Logo}
            alt="LaslesVPN"
            className="mb-7 w-[145px]"
          />

          <p
            className="text-[17px] font-medium leading-8"
            style={{ color: colors.text }}
          >
            LaslesVPN is a private virtual network that
            <br className="hidden md:block" />
            has unique features and has high security.
          </p>

          {/* Social Icons */}
          <div className="mt-8 flex gap-4">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[15px] font-bold shadow-sm transition-all duration-300 cursor-pointer"
              style={{ color: colors.primary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.primary;
                e.currentTarget.style.color = colors.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.white;
                e.currentTarget.style.color = colors.primary;
              }}
            >
              f
            </div>

            <div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[15px] font-bold shadow-sm transition-all duration-300 cursor-pointer"
              style={{ color: colors.primary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.primary;
                e.currentTarget.style.color = colors.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.white;
                e.currentTarget.style.color = colors.primary;
              }}
            >
              𝕏
            </div>

            <div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[15px] font-bold shadow-sm transition-all duration-300 cursor-pointer"
              style={{ color: colors.primary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.primary;
                e.currentTarget.style.color = colors.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.white;
                e.currentTarget.style.color = colors.primary;
              }}
            >
              ◎
            </div>
          </div>

          <p
            className="mt-7 text-[14px] font-medium"
            style={{ color: colors.text }}
          >
            ©2026 LaslesVPN
          </p>
        </div>

        {/* Product */}
        <div>
          <h3
            className="mb-6 text-[19px] font-bold"
            style={{ color: colors.heading }}
          >
            Product
          </h3>

          <ul
            className="space-y-4 text-[16px] font-medium"
            style={{ color: colors.text }}
          >
            <li className="cursor-pointer transition-colors duration-300 hover:underline">
              Download
            </li>
            <li className="cursor-pointer transition-colors duration-300 hover:underline">
              Pricing
            </li>
            <li className="cursor-pointer transition-colors duration-300 hover:underline">
              Locations
            </li>
            <li className="cursor-pointer transition-colors duration-300 hover:underline">
              Server
            </li>
            <li className="cursor-pointer transition-colors duration-300 hover:underline">
              Countries
            </li>
            <li className="cursor-pointer transition-colors duration-300 hover:underline">
              Blog
            </li>
          </ul>
        </div>

        {/* Engage */}
        <div>
          <h3
            className="mb-6 text-[19px] font-bold"
            style={{ color: colors.heading }}
          >
            Engage
          </h3>

          <ul
            className="space-y-4 text-[16px] font-medium"
            style={{ color: colors.text }}
          >
            <li className="cursor-pointer transition-colors duration-300 hover:underline">
              LaslesVPN ?
            </li>
            <li className="cursor-pointer transition-colors duration-300 hover:underline">
              FAQ
            </li>
            <li className="cursor-pointer transition-colors duration-300 hover:underline">
              Tutorials
            </li>
            <li className="cursor-pointer transition-colors duration-300 hover:underline">
              About Us
            </li>
            <li className="cursor-pointer transition-colors duration-300 hover:underline">
              Privacy Policy
            </li>
            <li className="cursor-pointer transition-colors duration-300 hover:underline">
              Terms of Service
            </li>
          </ul>
        </div>

        {/* Earn Money */}
        <div>
          <h3
            className="mb-6 text-[19px] font-bold"
            style={{ color: colors.heading }}
          >
            Earn Money
          </h3>

          <ul
            className="space-y-4 text-[16px] font-medium"
            style={{ color: colors.text }}
          >
            <li className="cursor-pointer transition-colors duration-300 hover:underline">
              Affiliate
            </li>
            <li className="cursor-pointer transition-colors duration-300 hover:underline">
              Become Partner
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}