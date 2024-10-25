import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import {auth} from '../../firebase';
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function RegisterWithEmail() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async(e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        if(password !== confirmPassword){
            setError("Passwords don't match.");
            setIsLoading(false);
            return;
        }

        try{
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User registered with sucsess");

            await sendEmailVerification(userCredentials.user);
            console.log("Verification Email sent.");
            navigate("/verify-email");

        } catch(error){
            console.log("Firebase error code:", error.code);
            if(error.code === 'auth/weak-password') {
                setError("Password is too weak.");
            }
            else if(error.code === "auth/email-already-in-use") {
                setError("This email is already assigned to an account.");
            } else {
                setError("Error registering. Please check your credentials.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <form onSubmit={handleRegister}>
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

                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setError(null);
                    }}
                    placeholder="Confirm Password"
                    required
                    className="border-b border-gray-900 p-2 w-full text-lg bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none  focus:ring-sky-500 rounded-md"
                />

                <button
                    type="submit"
                    className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700"
                    disabled={loading}
                >
                    {loading ? "Registering..." : "Register"}
                </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
    );
}

export default RegisterWithEmail;
