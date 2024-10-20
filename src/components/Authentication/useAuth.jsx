import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';

function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return user;
}

export default useAuth;
