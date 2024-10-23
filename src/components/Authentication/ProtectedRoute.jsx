import {useAuth} from "./AuthContext.jsx";
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const user = useAuth();

    if(!user) {
        return <Navigate to="/auth" replace />
    }

    if(!user.emailVerified) {
        return <Navigate to="/verify-email" replace />;
    }
    return children;
};

export default ProtectedRoute;