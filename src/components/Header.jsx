import { useState } from "react";
import { Link } from "react-router";
import foodLogo from "../../file.png";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={foodLogo} alt="Hey Foodie" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>

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
                    <li>
                        <Link to="/grocery" className="link">
                            Grocery
                        </Link>
                    </li>
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
