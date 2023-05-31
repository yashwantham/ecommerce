import { NavLink } from "react-router-dom";

import "./LoginPage.css"
export function LoginPage() {
    return (
        <>
            <div className="login-page">
                <div className="login-container">
                    <h1 className="login-heading">
                        Login
                    </h1>
                    <div className="email-container">
                        {/* <label className="email">Email: </label> */}
                        <input type="email" className="email-input" placeholder="Email"/>
                    </div>
                    <div className="password-container">
                        {/* <label className="passwrod">Password: </label> */}
                        <input type="password" className="password-input" placeholder="Password"/>
                    </div>
                    <div className="login-btn-container">
                        <button className="login-submit-btn">Login</button>
                    </div>
                    <div className="login-btn-container">
                        <button className="login-submit-btn">Login as Guest</button>
                        <p className="signup-text">Don't have an account? <NavLink to="/signup" className="signup-link">Sign up</NavLink></p>
                    </div>
                </div>
            </div>
        </>
    )
}