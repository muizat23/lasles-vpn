import React, { useEffect, useState } from "react";
import theme from "../constants/theme";
import Logo from "../assets/images/Logo.svg";

const { colors } = theme;

const sections = [
  { id: "about", label: "About", icon: "ⓘ" },
  { id: "features", label: "Feature", icon: "◎" },
  { id: "pricing", label: "Pricing", icon: "$" },
  { id: "testimonials", label: "Testimonial", icon: "◌" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "about";

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav
        className="fixed top-0 left-0 z-50 w-full shadow-sm"
        style={{ backgroundColor: colors.white }}
      >
        <div className="max-w-[1160px] mx-auto px-5 sm:px-6 h-[76px] md:h-[90px]">
          <div className="flex items-center justify-between h-full">

            {/* Logo */}
            <img
              src={Logo}
              alt="LaslesVPN"
              className="w-[140px] sm:w-[150px] md:w-[155px] h-auto"
            />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              <NavLink
                href="#about"
                active={activeSection === "about"}
              >
                About
              </NavLink>

              <NavLink
                href="#features"
                active={activeSection === "features"}
              >
                Features
              </NavLink>

              <NavLink
                href="#pricing"
                active={activeSection === "pricing"}
              >
                Pricing
              </NavLink>

              <NavLink
                href="#testimonials"
                active={activeSection === "testimonials"}
              >
                Testimonials
              </NavLink>
            </div>

            {/* Auth */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                className="text-[15px] sm:text-[17px] font-semibold transition-colors duration-300"
                style={{ color: colors.heading }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.heading;
                }}
              >
                Sign In
              </button>

              <a
                href="#pricing"
                className="text-[15px] sm:text-[17px] font-semibold rounded-full px-5 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3 border-2 transition-all duration-300"
                style={{
                  color: colors.primary,
                  borderColor: colors.primary,
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
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 z-50 w-full bg-white border-t shadow-[0_-5px_20px_rgba(0,0,0,0.06)]">
        <div className="grid grid-cols-4 h-[72px]">

          {sections.map((section) => (
            <MobileNavItem
              key={section.id}
              href={`#${section.id}`}
              icon={section.icon}
              label={section.label}
              active={activeSection === section.id}
            />
          ))}

        </div>
      </div>
    </>
  );
}

function NavLink({ href, children, active }) {
  return (
    <a
      href={href}
      className="text-[17px] font-medium transition-all duration-300"
      style={{
        color: active ? colors.primary : colors.text,
      }}
    >
      {children}
    </a>
  );
}

function MobileNavItem({ href, icon, label, active }) {
  return (
    <a
      href={href}
      className="flex flex-col items-center justify-center gap-1 text-[13px] font-medium transition-all duration-300"
      style={{
        color: active ? colors.primary : colors.text,
      }}
    >
      <span
        className="text-[24px] leading-none transition-transform duration-300"
        style={{
          transform: active ? "scale(1.1)" : "scale(1)",
        }}
      >
        {icon}
      </span>

      <span>{label}</span>
    </a>
  );
}