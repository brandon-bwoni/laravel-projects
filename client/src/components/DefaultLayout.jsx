
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";


const Defaultlayout = () => {
    const { token } = useStateContext();
    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <div>DefaultLayout</div>
            <Outlet />
        </div>
    );
};

export default Defaultlayout;
