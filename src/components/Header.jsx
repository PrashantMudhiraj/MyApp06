import { useState } from "react";
import { Link } from "react-router";
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
                    <li>
                        <Link to="/" className="link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="link">
                            About Us
                        </Link>
                    </li>
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
