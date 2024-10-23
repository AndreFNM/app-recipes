import { signOut } from "firebase/auth";
import { auth } from '../../firebase';
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function Logout() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            console.log("Logout sucsessful");
            navigate("/");
        } catch (error) {
            console.error("Error logging out:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-sky-500 text-white px-3 rounded-lg hover:bg-sky-600"
        >
            {loading ? "Logging out..." : "Logout"}
        </button>
    );
}

export default Logout;
