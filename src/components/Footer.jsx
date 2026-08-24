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
            <SocialIcon>f</SocialIcon>
            <SocialIcon>𝕏</SocialIcon>
            <SocialIcon>◎</SocialIcon>
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

          <ul className="space-y-4">
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
            className="mb-6 text-[19px] font-bold"
            style={{ color: colors.heading }}
          >
            Engage
          </h3>

          <ul className="space-y-4">
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
            className="mb-6 text-[19px] font-bold"
            style={{ color: colors.heading }}
          >
            Earn Money
          </h3>

          <ul className="space-y-4">
            <FooterLink>Affiliate</FooterLink>
            <FooterLink>Become Partner</FooterLink>
          </ul>
        </div>

      </div>
    </footer>
  );
}

function FooterLink({ children }) {
  return (
    <li
      className="cursor-pointer text-[16px] font-medium transition-colors duration-300"
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
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white text-[15px] font-bold shadow-sm transition-all duration-300"
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