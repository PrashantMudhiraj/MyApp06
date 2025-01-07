import React from "react";
import ReactDOM from "react-dom/client";
import foodLogo from "./file.png";

const Heading = () => {
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

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img
                className="food-logo"
                src="https://www.cookshideout.com/wp-content/uploads/2017/03/Hyderabadi-Veg-Biryani-Thali-FI.jpg"
                alt=""
            />
            <h4>Prashant Foods</h4>
            <h4>North Indian , Asian</h4>
            <h4>4.3 Rating</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input className="search-box" type="text" name="" id="" />
                <button className="search-button">Search</button>
            </div>
            <div className="res-container">
                <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
                <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
                <RestaurantCard /> <RestaurantCard /> <RestaurantCard />
            </div>
        </div>
    );
};

const AppComponent = () => {
    return (
        <div className="app">
            <Heading />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
