const RegisterForm = () => (
    <form className="w-full max-w-xl border border-gray-300 rounded-3xl p-6 bg-white font-['Plus_Jakarta_Sans']">

            <div className="mb-4">
                    <label className="block text-gray-700 mb-1 text-xs">Username</label>
                    <input
                        type="text"
                        className="w-full py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
            </div>

            <div className="mb-4">
                    <label className="block text-gray-700 mb-1 text-xs">Email</label>
                    <input
                        type="email"
                        className="w-full py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
            </div>

            <div className="mb-4">
                    <label className="block text-gray-700 mb-1 text-xs">Password</label>
                    <input
                        type="password"
                        className="w-full py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
            </div>

            <div className="mb-6">
                    <label className="block text-gray-700 mb-1 text-xs">Confirm Password</label>
                    <input
                        type="password"
                        className="w-full py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
            </div>

            <button className="w-40 block mx-auto bg-black text-white text-sm py-2 rounded-xl hover:bg-gray-800 transition font-inter">
                    Register →
            </button>
    </form>
);

export default RegisterForm;