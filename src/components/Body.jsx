import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import axios from "axios";

// import restroData from "../Data/restro.json";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { CORS_PROXY, RESTRO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withDiscountLabel } from "./RestaurantCard";
import userContext from "../utils/userContext";

const Body = () => {
    const [restroList, setRestroList] = useState([]);
    const [filteredRestro, setFilterRestro] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchData();
        // setRestroList(data);
    }, []);

    const fetchData = async () => {
        const response = await axios.get(CORS_PROXY + RESTRO_URL);
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
        setRestroList(finalRestroData);
        setFilterRestro(finalRestroData);
    };

    const RestaurantCardWithDiscount = withDiscountLabel(RestaurantCard);

    const { loggedInUser, setUserName } = useContext(userContext);

    if (!onlineStatus) {
        return <h3>You're offline!!</h3>;
    }
    return restroList.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className=" flex pt-28 pb-12 justify-between">
                <div className="pl-3">
                    <input
                        className="border border-solid border-black"
                        data-testid="searchInput"
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="px-4 py-0.5 bg-red-300 mx-4 hover:bg-red-400 rounded-sm"
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
                {/* <div>
                    <label>UserName : </label>
                    <input
                        className="border border-black pl-1"
                        value={loggedInUser}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                </div> */}
                <div className="pr-3">
                    <button
                        className="px-4 py-0.5 bg-red-300 mx-4 hover:bg-red-400 rounded-sm"
                        data-testid="topRatedRestro"
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
            </div>
            <div className="flex flex-wrap mx-4">
                {filteredRestro.length === 0
                    ? "No Results Found"
                    : filteredRestro.map((resObj) => (
                          <Link
                              key={resObj?.info?.id}
                              to={"/restaurant/" + resObj?.info?.id}
                              //   className="link"
                          >
                              {resObj.info.aggregatedDiscountInfoV3
                                  ?.discountTag ? (
                                  <RestaurantCardWithDiscount
                                      resData={resObj}
                                  />
                              ) : (
                                  <RestaurantCard resData={resObj} />
                              )}
                          </Link>
                      ))}
            </div>
        </div>
    );
};

export default Body;
