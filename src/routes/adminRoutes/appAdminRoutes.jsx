import { Route, Routes } from "react-router-dom";
import { EvolucionesPage } from "../../pages/evolucionesPage";
import { AdminLayout } from "../../template/adminLayout/adminLayout";
import { adminRoutes } from "./adminRoutes";

export const AppAdminRoutes = () => {

    return (
        <AdminLayout>
            <Routes>
                <Route index={true} element={<EvolucionesPage />} />
                {adminRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
                {/* <Route path="/dashboard/*" element={<Navigate to="/" />} /> */}
            </Routes>
        </AdminLayout>
    );
}