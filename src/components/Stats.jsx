import React from "react";
import theme from "../constants/theme";

const { colors } = theme;

export default function Stats() {
  return (
    <section className="max-w-[1060px] mx-auto px-6">
      <div className="bg-white rounded-[10px] shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 py-8">

          {/* Users */}
          <div className="flex items-center justify-center gap-5 border-r border-gray-200">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FFECEC" }}
            >
              <span style={{ color: colors.primary }}>👤</span>
            </div>

            <div>
              <h3
                className="text-xl font-bold"
                style={{ color: colors.heading }}
              >
                90+
              </h3>
              <p
                className="text-sm"
                style={{ color: colors.text }}
              >
                Users
              </p>
            </div>
          </div>

          {/* Locations */}
          <div className="flex items-center justify-center gap-5 border-r border-gray-200">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FFECEC" }}
            >
              <span style={{ color: colors.primary }}>📍</span>
            </div>

            <div>
              <h3
                className="text-xl font-bold"
                style={{ color: colors.heading }}
              >
                30+
              </h3>
              <p
                className="text-sm"
                style={{ color: colors.text }}
              >
                Locations
              </p>
            </div>
          </div>

          {/* Servers */}
          <div className="flex items-center justify-center gap-5">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#FFECEC" }}
            >
              <span style={{ color: colors.primary }}>🖥️</span>
            </div>

            <div>
              <h3
                className="text-xl font-bold"
                style={{ color: colors.heading }}
              >
                50+
              </h3>
              <p
                className="text-sm"
                style={{ color: colors.text }}
              >
                Servers
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}