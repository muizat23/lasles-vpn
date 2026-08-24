import Logo from "../assets/images/Logo.svg";
import theme from "../constants/theme";

const { colors } = theme;

export default function Footer() {
  return (
    <footer
      className="w-full pt-14 md:pt-20 pb-10 md:pb-14"
      style={{ backgroundColor: "#F8F8F8" }}
    >
      <div className="mx-auto max-w-[1160px] px-5 md:px-6">

        {/* Main Footer */}
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">

          {/* Brand */}
          <div className="max-w-[380px]">
            <img
              src={Logo}
              alt="LaslesVPN"
              className="mb-5 md:mb-7 w-[135px] md:w-[145px]"
            />

            <p
              className="text-[14px] md:text-[17px] font-medium leading-7 md:leading-8"
              style={{ color: colors.text }}
            >
              LaslesVPN is a private virtual network that
              <br className="hidden md:block" />
              has unique features and has high security.
            </p>

            {/* Social Icons */}
            <div className="mt-6 md:mt-8 flex gap-3 md:gap-4">
              <SocialIcon>f</SocialIcon>
              <SocialIcon>𝕏</SocialIcon>
              <SocialIcon>◎</SocialIcon>
            </div>

            <p
              className="mt-5 md:mt-7 text-[13px] md:text-[14px] font-medium"
              style={{ color: colors.text }}
            >
              ©2026 LaslesVPN
            </p>
          </div>

          {/* 3 Footer Columns */}
          <div className="grid grid-cols-3 gap-6 md:flex md:gap-12 lg:gap-16">

            {/* Product */}
            <div>
              <h3
                className="mb-4 md:mb-6 text-[16px] md:text-[19px] font-bold"
                style={{ color: colors.heading }}
              >
                Product
              </h3>

              <ul className="space-y-3 md:space-y-4">
                <FooterLink>Download</FooterLink>
                <FooterLink>Pricing</FooterLink>
                <FooterLink>Locations</FooterLink>
                <FooterLink>Server</FooterLink>
                <FooterLink>Countries</FooterLink>
                <FooterLink>Blog</FooterLink>
              </ul>
            </div>

            {/* Engage */}
            <div>
              <h3
                className="mb-4 md:mb-6 text-[16px] md:text-[19px] font-bold"
                style={{ color: colors.heading }}
              >
                Engage
              </h3>

              <ul className="space-y-3 md:space-y-4">
                <FooterLink>LaslesVPN ?</FooterLink>
                <FooterLink>FAQ</FooterLink>
                <FooterLink>Tutorials</FooterLink>
                <FooterLink>About Us</FooterLink>
                <FooterLink>Privacy Policy</FooterLink>
                <FooterLink>Terms of Service</FooterLink>
              </ul>
            </div>

            {/* Earn Money */}
            <div>
              <h3
                className="mb-4 md:mb-6 text-[16px] md:text-[19px] font-bold"
                style={{ color: colors.heading }}
              >
                Earn Money
              </h3>

              <ul className="space-y-3 md:space-y-4">
                <FooterLink>Affiliate</FooterLink>
                <FooterLink>Become Partner</FooterLink>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ children }) {
  return (
    <li
      className="cursor-pointer text-[13px] md:text-[16px] font-medium transition-colors duration-300"
      style={{ color: colors.text }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = colors.primary;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = colors.text;
      }}
    >
      {children}
    </li>
  );
}

function SocialIcon({ children }) {
  return (
    <div
      className="flex h-9 w-9 md:h-10 md:w-10 cursor-pointer items-center justify-center rounded-full bg-white text-[14px] md:text-[15px] font-bold shadow-sm transition-all duration-300"
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
      {children}
    </div>
  );
}