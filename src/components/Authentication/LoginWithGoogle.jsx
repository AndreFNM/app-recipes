import { signInWithPopup } from "firebase/auth";
import {auth, googleProvider} from '../../firebase';
import { useNavigate } from "react-router-dom";
import {useState} from "react";

function LoginWithGoogle() {
    const navigate = useNavigate();
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const handleGoogleLogin = async () => {
        setIsLoading(true);
        setError(null);
        try{
            await signInWithPopup(auth, googleProvider);
            navigate("/")
        } catch(error) {
            if(error.code === 'auth/popup-closed-by-user'){
                setError("Pop up was closed before the login was completed.");
            } else {
                setError("Failed to log in. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <>
            <button
                onClick={handleGoogleLogin}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                disabled={loading}
            >
                {loading ? "Logging in..." : "Login with Google"}
            </button>
            {error &&
                <p className="text-red-500 mt-2" >{error}</p>}
        </>
    );
}

export default LoginWithGoogle;
