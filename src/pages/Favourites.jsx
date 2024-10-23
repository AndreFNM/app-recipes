import {useAuth} from "../components/Authentication/AuthContext.jsx";
import {Navigate} from "react-router-dom";

function FavouritesPage(){
    const user = useAuth();

    if(!user) {
        return <Navigate to="/auth" replace />;

    }

    return (
        <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold underline">Favouriets Page!</h1>
        
    </div>
        );
}

export default FavouritesPage;