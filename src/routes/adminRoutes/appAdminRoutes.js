import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "../../templates/adminLayoute/adminLayoute";
import { adminRoutes } from "./adminRoutes";

export const AppAdminRoutes = () => {

    return (
        <AdminLayout>
            <Routes>
                {adminRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            </Routes>
        </AdminLayout>
    );
}