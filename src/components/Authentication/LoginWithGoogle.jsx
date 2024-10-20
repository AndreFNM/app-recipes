import { signInWithPopup } from "firebase/auth";
import {auth, googleProvider} from '../../firebase';
import { useNavigate } from "react-router-dom";

function LoginWithGoogle() {
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try{
            await signInWithPopup(auth, googleProvider);
            navigate("/")
        } catch(error) {
            if(error.code === 'auth/popup-closed-by-user'){
                console.log("Pop up was closed before the login was completed.");
            } else {
                console.error("Error logging in with google", error);   
            }
        }
    };

    return(
        <button onClick={handleGoogleLogin} className="bg-blue-500 text-white px-4 py-2 rounded-lg" >Login with Google</button>
    );
}

export default LoginWithGoogle;
