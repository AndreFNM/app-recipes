import { signOut } from "firebase/auth";
import { auth } from '../../firebase';
import { NavLink } from "react-router-dom";

function Logout() {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("Logout sucsessful");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <NavLink to="/">
        <button onClick={handleLogout} className="bg-sky-500 text-white px-3 rounded-lg hover:bg-sky-600">
            Logout
        </button>
        </NavLink>
    );
}

export default Logout;
