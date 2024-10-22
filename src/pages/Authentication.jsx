import LoginWithGoogle from "../components/Authentication/LoginWithGoogle";
import LoginWithEmail from "../components/Authentication/LoginWithEmail";
import RegisterWithEmail from "../components/Authentication/RegisterWithEmail";
import useAuth from "../components/Authentication/useAuth";
import Logout from "../components/Authentication/Logout";
import { useState } from "react";

function AuthenticationPage() {
    const[isRegistering, setIsRegistering] = useState(false);
    const isAuth = useAuth();

    function handleIsRegistering() {
        setIsRegistering(!isRegistering);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
            <h1 className="text-3xl font-bold">{isRegistering ? "Register" : "Login"}</h1>
            {isAuth? <Logout /> : 
            <>
            {!isRegistering && (
                <>
                    <LoginWithEmail />
                    <LoginWithGoogle />
                </>
            )}
            {isRegistering && <RegisterWithEmail />}
            
            <div className="flex items-center justify-between space-x-3">
                <p>Do you hava an account?</p> 
                <button onClick={handleIsRegistering} className="bg-sky-500 text-white px-3 rounded-lg hover:bg-sky-600"
                >{isRegistering ? "Login" : "Register"}</button>
            </div>
            </> }
            
            
        </div>
);
}

export default AuthenticationPage;