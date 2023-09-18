import { BsMoon, BsSun } from "react-icons/bs";

import { useTheme } from "@/context/themeContext";

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="fixed bottom-5 right-5 bg-background w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-background border-opacity-80 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
            onClick={toggleTheme}
        >
            {theme === "light" ? <BsSun /> : <BsMoon />}
        </button>
    );
}
