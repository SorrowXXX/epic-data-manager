import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    console.log("ProtectedRoute rendered");
    return token ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;