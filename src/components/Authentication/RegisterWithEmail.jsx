import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase';
import { useState } from "react";

function RegisterWithEmail() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async(e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("User registered with sucsess");
        } catch(error){
            console.log("Error registering: ", error);
        }
    };

    return(
        <form onSubmit={handleRegister}>
            <input
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Email"
                required
                className="border p-2"
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="border p-2"
            />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
            Register</button>

        </form>
    );
}

export default RegisterWithEmail;