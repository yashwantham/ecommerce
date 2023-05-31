import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css"
// import Topshop_Logo from "assets/images";

export function Navbar() {
    return (
        <>
            <div className="nav-container">
                <div >
                    <NavLink to="/" className="app-name">
                        TopShop
                    </NavLink>
                </div>
                {/* <div className="app-logo">
                    <img src="" alt="" />
                </div> */}
                <div>
                    <input type="text" placeholder="Search" className="search-bar" />
                </div>
                <div className="navigations">
                    <NavLink to="/productlist" className="right-nav shopnow-btn">Shop Now!</NavLink>
                    <NavLink to="/wishlist" className="right-nav icon">
                        <FontAwesomeIcon icon={faHeart} />
                    </NavLink>
                    <NavLink to="/cart" className="right-nav icon">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </NavLink>
                    <NavLink to="/profile" className="right-nav icon">
                        <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                    <NavLink to="/login" className="right-nav login-btn">Login</NavLink>
                </div>
            </div>
            <div>
                <NavLink to="/login" className="right-nav login-btn-mobile">Login</NavLink>
            </div>
            <div>
                <input type="text" placeholder="Search" className="mobile-search-bar" />
            </div>
        </>
    )
}
