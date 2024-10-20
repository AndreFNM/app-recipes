import LoginWithGoogle from "../components/Authentication/LoginWithGoogle";
import LoginWithEmail from "../components/Authentication/LoginWithEmail";
import RegisterWithEmail from "../components/Authentication/RegisterWithEmail";
import useAuth from "../components/Authentication/useAuth";
import Logout from "../components/Authentication/Logout";

function AuthenticationPage() {
    const isAuth = useAuth();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
            <h1 className="text-3xl font-bold">Authentication</h1>
            {isAuth? <Logout /> : 
            <>
            <LoginWithGoogle />
            <LoginWithEmail />
            Or 
            <RegisterWithEmail />
            </> }
            
            
        </div>
);
}

export default AuthenticationPage;