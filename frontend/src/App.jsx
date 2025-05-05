import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthRoutes from './routes/AuthRoutes';
import './index.css'
import HomeRoutes from "./routes/HomeRoutes";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<AuthRoutes />} />
                <Route path="/home/*" element={<HomeRoutes />} />
            </Routes>
        </Router>
    );
}

export default App;
