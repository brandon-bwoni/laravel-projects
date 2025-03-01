import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";

const GuestLayout = () => {
    const { token } = useStateContext();
    if (!token) {
        return <Navigate to="/" />;
    }
    return (
        <div>
            <div>GuestLayout</div>
            <Outlet />
        </div>
    );
};

export default GuestLayout;
