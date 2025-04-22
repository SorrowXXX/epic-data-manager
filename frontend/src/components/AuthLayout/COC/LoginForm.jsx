import { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || 'Login failed');
                return;
            }

            localStorage.setItem('token', data.token);
            alert('Connexion réussie ✅');
        } catch (err) {
            setError('Erreur réseau ou serveur');
            console.error(err);
        }
    };

    return (
        <form
            onSubmit={handleLogin}
            className="w-full max-w-xl border border-gray-300 rounded-3xl p-6 bg-white font-['Plus_Jakarta_Sans']"
        >
            <div className="mb-4">
                <label className="block text-gray-700 mb-1 text-xs">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1 text-xs">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600 mb-6 font-inter">
                <label className="flex items-center space-x-2">
                    <input type="checkbox" className="accent-gray-600" />
                    <span className="text-xs">Remember me</span>
                </label>
                <a href="#" className="text-xs hover:underline">Forgot Password ?</a>
            </div>

            <button
                type="submit"
                className="w-40 block mx-auto bg-black text-white text-sm py-2 rounded-xl hover:bg-gray-800 transition font-inter"
            >
                Log In →
            </button>

            {error && <p className="text-red-500 text-xs text-center mt-4">{error}</p>}
        </form>
    );
};

export default LoginForm;