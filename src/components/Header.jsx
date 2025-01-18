import { useState, useContext } from "react";
import { Link } from "react-router";
import foodLogo from "../../file.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(userContext);

    return (
        <div className=" flex flex-wrap justify-between  bg-red-100 border-solid shadow-md fixed t-0 w-full">
            <div className="m-2">
                <img className="w-16" src={foodLogo} alt="Hey Foodie" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status : {onlineStatus ? "🟢" : "🔴"}
                    </li>

                    <li>
                        <Link to="/" className="px-4">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="px-4">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="px-4">
                            About Us
                        </Link>
                    </li>
                    <li className="pr-4">
                        <Link>Cart</Link>
                    </li>
                    <li>
                        <Link to="/grocery" className="px-4">
                            Grocery
                        </Link>
                    </li>
                    <button
                        className="px-4"
                        onClick={() =>
                            btnName === "Login"
                                ? setBtnName("Logout")
                                : setBtnName("Login")
                        }
                    >
                        {btnName}
                    </button>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
