import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// Your web app's Firebase configuration
const apiKey = import.meta.env.VITE_REACT_APP_APIKEY;
const authDomain = import.meta.env.VITE_REACT_APP_AUTHDOMAIN;
const projectId = import.meta.env.VITE_REACT_APP_PROJECTID;
const storageBucket = import.meta.env.VITE_REACT_APP_STORAGEBUCKET;
const messagingSenderId = import.meta.env.VITE_REACT_APP_MESSAGINGSENDERID;
const appId = import.meta.env.VITE_REACT_APP_APPID;


const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
