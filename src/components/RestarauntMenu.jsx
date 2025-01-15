import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import { CORS_PROXY, MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () => {
    const { resId } = useParams();
    const [restroData, setRestroData] = useState(null);
    // console.log(resId);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const response = await axios.get(CORS_PROXY + MENU_URL(resId));
        // console.log(response.data);
        setRestroData(response.data);
    };

    if (restroData === null) return <Shimmer />;

    const { name, costForTwoMessage, avgRating, sla, totalRatingsString } =
        restroData?.data?.cards[2]?.card?.card?.info;

    // console.log(restroData);

    const foodItems =
        restroData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]
            ?.card?.card?.itemCards;

    // console.log("-------", foodItems);

    return (
        <div className="restro-card">
            <h1>{name}</h1>
            <h4>
                {avgRating} -({totalRatingsString}) - {costForTwoMessage}
            </h4>
            <h4>{sla.slaString}</h4>
            <div className="Menu">
                <h2>Menu</h2>
                <ul>
                    {foodItems.map((items) => (
                        <li key={items?.card?.info?.id}>
                            {items?.card?.info?.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantsMenu;
