import type { Config } from "tailwindcss";

export default {
    content: ["/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            arial: ["Arial", "Helvetica", "sans-serif"],
        },
        extend: {
            fontSize: {
                clamp: "clamp(0.5rem, 2.5vmin, 1rem)",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
} satisfies Config;
