import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="p-12 flex flex-col items-center min-h-screen text-clamp">
            <Outlet />
        </div>
    );
}

export default Layout;
