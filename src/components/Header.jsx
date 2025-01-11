import foodLogo from "../../file.png";

const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Header;
