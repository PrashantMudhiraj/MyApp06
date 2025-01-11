import { useState } from "react";
import foodLogo from "../../file.png";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={foodLogo} alt="Hey Foodie" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <button
                        className="login-btn"
                        onClick={() =>
                            btnName === "Login"
                                ? setBtnName("Logout")
                                : setBtnName("Login")
                        }
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
