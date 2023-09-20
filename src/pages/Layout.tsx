import { Outlet } from "react-router-dom";
import ThemeSwitch from "@/components/theme-switch/ThemeSwitch";

export default function Layout() {
    return (
        <div className="p-6 sm:p-12 flex flex-col items-center min-h-screen text-clamp">
            <Outlet />
            <ThemeSwitch />
        </div>
    );
}
