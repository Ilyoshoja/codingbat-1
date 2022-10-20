import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/hook";

function ProtectedRoute() {
    let isloged = useAppSelector(state => state.islogged.value)
    return isloged ? <Outlet /> : <Navigate to={'/'} />;


}

export default ProtectedRoute