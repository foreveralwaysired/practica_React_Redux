import { Navigate, /* useLocation */ } from "react-router-dom";
import { useAuthStore } from "../hooks/authHooks/useAuthStore";

export const PrivateRoutes = ({ children }) => {
    const { status } = useAuthStore();

    return (status === "authenticated") ? children : <Navigate to="/auth/login" />;
}