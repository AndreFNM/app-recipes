import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function LoginWithEmail() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;

            console.log("Login successful");
            if(user.emailVerified){
                navigate("/profile");
            } else {
                setError("Please verify your email before acessing your profile.");
            }

        } catch (error) {
            setError("Failed to log in. Please check your credentials.");
            console.error("Error loggin in:", error);
        } finally { setIsLoading(false); }
    };



    return (
        <form onSubmit={handleLogin}>
            <div className="flex flex-col items-center justify-between space-y-5">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setError(null);
                    }}
                    placeholder="Email"
                    required
                    className="border-b border-gray-900 p-2 w-full text-lg bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none  focus:ring-sky-500 rounded-md"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setError(null);
                    }}
                    placeholder="Password"
                    required
                    className="border-b border-gray-900 p-2 w-full text-lg bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none  focus:ring-sky-500 rounded-md"
                />
                <button type="submit" className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700"
                disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
    );
}

export default LoginWithEmail;
