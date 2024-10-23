import {useAuth} from "../components/Authentication/AuthContext.jsx";
import {Navigate} from "react-router-dom";

function MyRecipesPage() {
    const user = useAuth();

    if(!user) {
        return <Navigate to="/auth" replace />;

    }

    return (
        <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold underline">My Recipes Page!</h1>
        
    </div>
        );
}

export default MyRecipesPage;