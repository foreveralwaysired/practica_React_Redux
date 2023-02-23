import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AppAdminRoutes } from "./adminRoutes/appAdminRoutes"
import { PrivateRoutes } from "./privateRoutes"
import { PublicRoutes } from "./publicRoutes"


export const AppRoutes = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="auth/*"
                    element={
                        <PublicRoutes>
                            <Routes>
                                <Route path="/*" element={<Navigate to="/auth/login" />} />
                            </Routes>
                        </PublicRoutes>
                    }
                />
                <Route
                    path="/*"
                    element={
                        <PrivateRoutes>
                            <AppAdminRoutes />
                        </PrivateRoutes>
                    }
                />
                <Route path="/*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
}
