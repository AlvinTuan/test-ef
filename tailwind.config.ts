import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#11A7B6",
                secondary: "#45dd97",
                takeTestColor: "#79B3F8",
                focus_hover: "#23527c",
                tertiary: "#10b7dd",
            },
            lineHeight: {
                desktopTitle1: "56.016px",
            },
            boxShadow: {
                btn: "0 2px 8px 0 rgba(25, 25, 25, 0.2)",
                card: "0 2px 16px 0 rgba(25, 25, 25, 0.16)",
            },
            backgroundColor: {
                hr: "#0000001F",
                takeTest: "#79B3F8",
            },
            screens: {
                sm: "600px",
                xl: "1264px",
            },
        },
    },
    plugins: [],
};
export default config;
