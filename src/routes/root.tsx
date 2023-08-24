import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { store } from "../redux/store";

function Root() {
    return (
        <Provider store={store}>
            <div className="p-12 flex flex-col items-center min-h-screen text-clamp">
                <Outlet />
            </div>
        </Provider>
    );
}

export default Root;
