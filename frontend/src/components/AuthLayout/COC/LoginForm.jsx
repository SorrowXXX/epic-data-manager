const LoginForm = () => (
    <form className="w-full max-w-xl border border-gray-300 rounded-3xl p-6 bg-white font-['Plus_Jakarta_Sans']">

        <div className="mb-4">
            <label className="block text-gray-700 mb-1 text-xs">Username</label>
            <input
                type="text"
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

        <div className="flex items-center justify-between text-sm text-gray-600 mb-6 font-inter">
            <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-gray-600" />
                <span className="text-xs">Remember me</span>
            </label>
            <a href="#" className="text-xs hover:underline">Forgot Password ?</a>
        </div>

        <button className="w-40 block mx-auto bg-black text-white text-sm py-2 rounded-xl hover:bg-gray-800 transition font-inter">
            Log In →
        </button>
    </form>
);

export default LoginForm;