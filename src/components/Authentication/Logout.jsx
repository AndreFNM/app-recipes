import { signOut } from "firebase/auth";
import { auth } from '../../firebase';

function Logout() {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("Logiut sucsessful");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Logout
        </button>
    );
}

export default Logout;
