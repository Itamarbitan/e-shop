import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import User from "./User";
import SignOut from "../auth/SignOut";

function Navbar() {
    const context = useContext(AppContext);
    if (!context) {
        return <div>Error</div>;
    }

    const isSignedIn = context && context.userName.length > 0;
    console.log(`isSignedIn status: ${isSignedIn}`);


    return (  
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink 
                        className="navbar-brand" 
                        to="/">
                        <i className="bi bi-briefcase-fill me-2" />
                        Local-Biz
                    </NavLink>
                    <ul className="navbar-nav flex-row me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <NavLink 
                                className="nav-link"
                                aria-current="page"
                                to="/about"
                            >About
                            </NavLink>
                        </li>                        
                        <li className="nav-item me-3">
                            <NavLink 
                                className="nav-link"
                                aria-current="page"
                                to="/mycards"
                            >My Cards
                            </NavLink>
                        </li>
                        {/* <li className="nav-item me-2">
                            <NavLink 
                                className="nav-link"
                                aria-current="page"
                                to="/favoritecards"
                            >My Favorite Cards
                            </NavLink>
                        </li> */}
                        <span className="btn text-light">
                            <User />
                        </span>                        
                    </ul>
                    <ul className="navbar-nav flex-row mb-2 mb-lg-0">
                        {
                            !isSignedIn &&
                            <>
                                <li className="nav-item me-3">
                                    <NavLink
                                        className="nav-link"
                                        aria-current="page"
                                        to="/signin"
                                    >Sign in                                
                                    </NavLink>
                                </li>
                                <li className="nav-item me-3">
                                    <NavLink
                                        className="nav-link"
                                        aria-current="page"
                                        to="/signup"
                                    >Sign up                                
                                    </NavLink>
                                </li>
                                <li className="nav-item me-3">
                                    <NavLink
                                        className="nav-link"
                                        aria-current="page"
                                        to="/businessuserregistration"
                                    >Business User                               
                                    </NavLink>
                                </li>
                            </>
                        }
                        {
                            isSignedIn &&
                            <>
                                <li className="nav-item me-3">
                                    <NavLink
                                        className="nav-link"
                                        aria-current="page"
                                        to="/businesscardregistration"
                                    >Create a business card                                
                                    </NavLink>
                                </li>                            
                                <li className="nav-item me-3">
                                    <SignOut />
                                </li>
                            </>
                        }
                    </ul>
                </div>                
            </nav>
        </header>
    );
}

export default Navbar;