import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logout from '../components/Authentication/Logout';
import {useAuth} from "./Authentication/AuthContext.jsx";

function MainNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };

    const isAuth = useAuth();

    return(
    <header className="bg-white bg-opacity-70 backdrop-blur-md shadow-md fixed w-full top-0 z-10">
        <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">
              <NavLink to="/">Recipes App</NavLink>
            </div>
            <ul className="hidden md:flex space-x-8 text-lg">
                <li>
                    <NavLink to="/" className="text-gray-800 hover:text-blue-500 transition duration-300">
                        Home
                    </NavLink>
                </li>
                {isAuth ?
                <li>
                    <NavLink to="favourites" className="text-gray-800 hover:text-blue-500 transition duration-300">
                        Favourites
                    </NavLink>
                </li> 
                :
                <>

                </>
                 }
                
                {isAuth ? 
                    <li>
                    <NavLink to="myRecipes" className="text-gray-800 hover:text-blue-500 transition duration-300">
                        My Recipes
                    </NavLink>
                </li> :
                <></>
                }

                {isAuth ? 
                    <li>
                    <NavLink to="profile" className="text-gray-800 hover:text-blue-500 transition duration-300">
                        Profile
                    </NavLink>
                </li> :
                <></>
                }

                <li>
                    <NavLink to="searchRecipes" className="text-gray-800 hover:text-blue-500 transition duration-300">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="w-[150px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                    </NavLink>
                </li>
                {isAuth ? <>
                    <li>
                    <Logout />
                </li>
                </>
                :
                <>
                <li>
                    <NavLink to="auth" className="text-gray-800 hover:text-blue-500 transition duration-300">
                        Authentication
                    </NavLink>
                </li>
                </>
                }
            </ul>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
        </nav>
       
       {/* Mobile Menu - Condicional */}
       {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <ul className="space-y-4 p-4 text-lg">
                        <li>
                            <NavLink to="/" className="text-gray-800 hover:text-blue-500 transition duration-300" onClick={toggleMenu}>
                                Home
                            </NavLink>
                        </li>
                        {isAuth ?
                <li>
                    <NavLink to="favourites" className="text-gray-800 hover:text-blue-500 transition duration-300">
                        Favourites
                    </NavLink>
                </li> 
                :
                <>

                </>
                 }
                
                {isAuth ? 
                    <li>
                    <NavLink to="myRecipes" className="text-gray-800 hover:text-blue-500 transition duration-300">
                        My Recipes
                    </NavLink>
                </li> :
                <></>
                }

                {isAuth ? 
                    <li>
                    <NavLink to="profile" className="text-gray-800 hover:text-blue-500 transition duration-300">
                        Profile
                    </NavLink>
                </li> :
                <></>
                }
                        <li>
                            <NavLink to="/searchRecipes" className="text-gray-800 hover:text-blue-500 transition duration-300" onClick={toggleMenu}>
                            <input 
                                type="text" 
                                placeholder="Search..." 
                                className="w-[150px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            />
                            </NavLink>
                        </li>
                        {isAuth ? <>
                    <li>
                    <Logout />
                </li>
                </>
                :
                <>
                <li>
                    <NavLink to="auth" className="text-gray-800 hover:text-blue-500 transition duration-300">
                        Authentication
                    </NavLink>
                </li>
                </>
                }
                    </ul>
                </div>
            )}
    </header>
    );
}

export default MainNavigation;