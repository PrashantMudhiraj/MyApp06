import { useState } from "react";
import { useParams } from "react-router";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantsMenu = () => {
    const { resId } = useParams();
    const restroData = useRestaurantMenu(resId);
    const [showItems, setShowItems] = useState(null);

    if (restroData === null) return <Shimmer />;

    const { name, costForTwoMessage, avgRating, sla, totalRatingsString } =
        restroData?.data?.cards[2]?.card?.card?.info;

    // console.log(restroData);
    // console.log(restroData);
    const foodItems =
        restroData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
            (card) => {
                return (
                    card.card.card?.["@type"] ==
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                );
            }
        );

    // console.log("-------", foodItems);

    return (
        <div className="pt-28 text-center">
            <div>
                <h1>{name}</h1>
                <h4>
                    {avgRating} -({totalRatingsString}) - {costForTwoMessage}
                </h4>
                <h4>{sla.slaString}</h4>
            </div>
            {foodItems.map((item, index) => {
                return (
                    <RestaurantCategory
                        data={item}
                        key={index}
                        expandItems={showItems === index ? true : false}
                        setShowItems={() =>
                            setShowItems((currentIndex) =>
                                index === currentIndex ? null : index
                            )
                        }
                    />
                );
            })}
        </div>
    );
};

export default RestaurantsMenu;
