import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-neometric)", "system-ui", "sans-serif"],
            },
            colors: {
                dark: '#282829',
                light: '#FEFEFE',
                zcom: '#0E46B9'
            },
        },
    },
    plugins: [animate],
};

export default config;
