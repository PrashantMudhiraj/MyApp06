import { useState } from "react";
import restroData from "../Data/restro.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [restroList, setRestroList] = useState(restroData);
    return (
        <div className="body">
            <div className="search">
                {/* <input className="search-box" type="text" name="" id="" />
                <button className="search-button">Search</button> */}
                <button
                    className="filter-btn"
                    onClick={() => {
                        let filteredRestroList = restroData.filter(
                            (restro) => restro.info.avgRating > 4
                        );
                        setRestroList(filteredRestroList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {restroList.map((resObj) => (
                    <RestaurantCard key={resObj.info.id} resData={resObj} />
                ))}
            </div>
        </div>
    );
};

export default Body;
