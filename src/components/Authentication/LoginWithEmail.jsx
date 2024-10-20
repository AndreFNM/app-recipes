import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useState } from "react";

function LoginWithEmail() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Login with sucsess");
        } catch (error) {
            console.error("Error loggin in:", error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="border p-2"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="border p-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Login
            </button>
        </form>
    );
}

export default LoginWithEmail;
