import React from "react";
import LoginWithGoogle from "../components/Authentication/LoginWithGoogle";
import LoginWithEmail from "../components/Authentication/LoginWithEmail";
import RegisterWithEmail from "../components/Authentication/RegisterWithEmail";
import {useAuth} from "../components/Authentication/AuthContext.jsx";
import Logout from "../components/Authentication/Logout";
import { useState } from "react";

function AuthenticationPage() {
    const[isRegistering, setIsRegistering] = useState(false);
    const isAuth = useAuth();

    function handleIsRegistering() {
        setIsRegistering(!isRegistering);
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-5">
            {isAuth ? <h1 className="text-3xl font-bold">Welcome Back!</h1> : <h1 className="text-3xl font-bold">Welcome!</h1>}

        <div className="bg-gray-300 p-8 rounded-lg shadow-lg max-w-md w-full space-y-5">
            <h1 className="text-3xl font-semibold text-center mb-6">{isRegistering ? "Register" : "Login"}</h1>
            {isAuth? <Logout /> : 
            <>
            {!isRegistering && (
                <>
                    <LoginWithEmail />
                    <LoginWithGoogle />
                </>
            )}
            {isRegistering && <RegisterWithEmail />}
            
            <div className="flex flex-col space-y-5 mt-4">
            <div className="flex items-center justify-between space-x-5">
                <p>Do you hava an account?</p> 
                <button onClick={handleIsRegistering} className="bg-sky-600 text-white px-4 rounded-lg hover:bg-sky-700 transition-colors"
                >{isRegistering ? "Login" : "Register"}</button>
            </div>
            </div>
            </> 
            }
            </div>
        </div>
);
}

export default AuthenticationPage;