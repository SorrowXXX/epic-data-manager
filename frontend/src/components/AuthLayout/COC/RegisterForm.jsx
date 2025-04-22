import { useState } from 'react';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail]     = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm]   = useState('');
    const [error, setError]     = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (password !== confirm) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || 'Inscription échouée');
                return;
            }

            setSuccess('Inscription réussie 🎉');
            // Optionnel : rediriger ou passer à la page de login
        } catch (err) {
            setError('Erreur serveur');
            console.error(err);
        }
    };

    return (
        <form
            onSubmit={handleRegister}
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
                <label className="block text-gray-700 mb-1 text-xs">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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

            <div className="mb-6">
                <label className="block text-gray-700 mb-1 text-xs">Confirm Password</label>
                <input
                    type="password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    className="w-full py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-40 block mx-auto bg-black text-white text-sm py-2 rounded-xl hover:bg-gray-800 transition font-inter"
            >
                Register →
            </button>

            {error && <p className="text-red-500 text-xs text-center mt-4">{error}</p>}
            {success && <p className="text-green-600 text-xs text-center mt-4">{success}</p>}
        </form>
    );
};

export default RegisterForm;