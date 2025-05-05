import { useRoutes } from 'react-router-dom';
import ProtectedRoute from "../components/AuthLayout/COC/ProtectedRoute";
import HomePage from "../pages/HomePage";

const HomeRoutes = () => {
    return useRoutes([
        {
            path: '*',
            element: (
                <ProtectedRoute>
                    <HomePage />
                </ProtectedRoute>
            ),
        }
    ]);
};

export default HomeRoutes;