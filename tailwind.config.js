import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */

const TAILWIND_CONFIG = {
    content: ["./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [heroui()],
};

export default TAILWIND_CONFIG;
