import { useState, useEffect, use } from "react";
import axios from "axios";

// import restroData from "../Data/restro.json";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restroList, setRestroList] = useState([]);
    const [filteredRestro, setFilterRestro] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
        // setRestroList(data);
    }, []);

    const fetchData = async () => {
        const response = await axios.get(
            "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = response.data.data.cards.filter(
            (card) =>
                ["top_brands_for_you", "restaurant_grid_listing"].includes(
                    card?.card?.card?.id
                )
            // card?.card?.card?.id === "top_brands_for_you"
        );
        // console.log(data[0].card.card.gridElements.infoWithStyle.restaurants);
        const finalRestroData =
            data[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(finalRestroData.length);
        setRestroList(finalRestroData);
        setFilterRestro(finalRestroData);
    };

    // if (restroList.length === 0) {
    //     return <Shimmer />;
    // }
    return restroList.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                        className="search-box"
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="search-button"
                        onClick={() => {
                            console.log(
                                searchText.toLowerCase().replaceAll(" ", "")
                            );
                            const filterRestro = restroList.filter((restro) => {
                                return restro?.info?.name
                                    .toLowerCase()
                                    .replaceAll(" ", "")
                                    .includes(
                                        searchText
                                            .toLowerCase()
                                            .replaceAll(" ", "")
                                    );
                            });
                            setFilterRestro(filterRestro);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        let filteredRestroList = restroList.filter(
                            (restro) => restro.info.avgRating > 4.4
                        );
                        console.log(filteredRestroList.length);
                        setFilterRestro(filteredRestroList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestro.length === 0
                    ? "No Results Found"
                    : filteredRestro.map((resObj) => (
                          <RestaurantCard
                              key={resObj.info.id}
                              resData={resObj}
                          />
                      ))}
            </div>
        </div>
    );
};

export default Body;
