import { Routes, Route } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';

const AuthRoutes = () => (
    <Routes>
        <Route path="/" element={<AuthPage />} />
    </Routes>
);

export default AuthRoutes;