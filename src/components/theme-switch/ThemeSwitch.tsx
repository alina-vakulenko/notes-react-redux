import { BsMoon, BsSun } from "react-icons/bs";

import { useTheme } from "@/context/themeContext";

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-background/70 backdrop-blur-sm border border-background border-opacity-30 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-ring focus-visible:border-border transition-all"
            onClick={toggleTheme}
        >
            {theme === "light" ? <BsSun /> : <BsMoon />}
        </button>
    );
}
