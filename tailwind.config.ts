import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        myBlue: "linear-gradient(45deg, #252DF7, #7772FE)",
      },
      colors: {
        customBlue: "#1E40AF",
        customRed: "#DC2626",
      },
    },
  },
  plugins: [],
};
export default config;
