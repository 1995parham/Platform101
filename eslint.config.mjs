import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

const config = [
  ...coreWebVitals,
  ...typescript,
  {
    files: ["app/**/*.{ts,tsx}"],
    rules: {
      // The deck uses raw <img> because next/image would be unhelpful inside
      // reveal.js sections and we already opt out via images.unoptimized.
      "@next/next/no-img-element": "off",
    },
  },
];

export default config;
