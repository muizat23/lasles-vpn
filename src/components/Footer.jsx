import Logo from '../assets/images/Logo.svg'
import theme from "../constants/theme";

const { colors } = theme;

export default function Footer() {
  return (
    <footer
      className="w-full pt-16 pb-10"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <div className="mx-auto flex max-w-[1060px] flex-col justify-between gap-12 px-6 md:flex-row">

        {/* Brand */}
        <div className="max-w-[340px]">
          <img src={Logo} alt="LaslesVPN" className="mb-5 w-[105px]" />

          <p
            className="text-[11px] leading-5"
            style={{ color: colors.text }}
          >
            LaslesVPN is a private virtual network that
            <br className="hidden md:block" />
            has unique features and has high security.
          </p>

          {/* Social Icons */}
          <div className="mt-5 flex gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#F53855] shadow-sm">
              f
            </div>

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#F53855] shadow-sm">
              𝕏
            </div>

            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-bold text-[#F53855] shadow-sm">
              ◎
            </div>
          </div>

          <p
            className="mt-5 text-[10px]"
            style={{ color: colors.text }}
          >
            ©2026LaslesVPN
          </p>
        </div>

        {/* Product */}
        <div>
          <h3
            className="mb-4 text-[12px] font-bold"
            style={{ color: colors.heading }}
          >
            Product
          </h3>

          <ul
            className="space-y-3 text-[10px]"
            style={{ color: colors.text }}
          >
            <li>Download</li>
            <li>Pricing</li>
            <li>Locations</li>
            <li>Server</li>
            <li>Countries</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Engage */}
        <div>
          <h3
            className="mb-4 text-[12px] font-bold"
            style={{ color: colors.heading }}
          >
            Engage
          </h3>

          <ul
            className="space-y-3 text-[10px]"
            style={{ color: colors.text }}
          >
            <li>LaslesVPN ?</li>
            <li>FAQ</li>
            <li>Tutorials</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Earn Money */}
        <div>
          <h3
            className="mb-4 text-[12px] font-bold"
            style={{ color: colors.heading }}
          >
            Earn Money
          </h3>

          <ul
            className="space-y-3 text-[10px]"
            style={{ color: colors.text }}
          >
            <li>Affiliate</li>
            <li>Become Partner</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}