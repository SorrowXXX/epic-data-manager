import { FaUser } from 'react-icons/fa';
import { decodeToken } from '../../../Utils/decodeToken';

const Sidebar = () => {
    const decoded = decodeToken();
    const username = decoded?.username || 'Unknown';

    return (
        <div className="w-64 h-screen bg-black text-white flex flex-col justify-between px-6 py-8 font-mono">
            <div>
                <h1 className="text-4xl font-bold tracking-widest mb-2 font-jetbrains">EPIQA</h1>
                <p className="text-lg tracking-wider font-jetbrains">Data manager</p>
            </div>

            <div className="flex items-center gap-2 text-sm">
                <div className="bg-white text-black p-1 rounded">
                    <FaUser size={16} />
                </div>
                <span>{username}</span>
            </div>
        </div>
    );
};

export default Sidebar;