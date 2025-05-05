import Dashboard from "./COC/Dashboard";
import Sidebar from "./COC/SiderBar";
import Data from "./COC/Data";

const HomeLayout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar gauche */}
            <Sidebar />

            {/* Contenu principal */}
            <div className="flex-1 overflow-y-auto bg-white">
                <Dashboard />
                <Data />
            </div>
        </div>
    );
};

export default HomeLayout;