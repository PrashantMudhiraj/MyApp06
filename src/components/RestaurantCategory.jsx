import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, expandItems, setShowItems }) => {
    const handleClick = () => {
        // const isAccordionOpen = showItems;
        // isAccordionOpen ? setShowItems(false) : setShowItems(true);
        setShowItems();
    };
    return (
        <div>
            <div className="bg-gray-100 w-1/2 mx-auto my-4 shadow-lg p-4">
                <div
                    className="flex justify-between cursor-pointer"
                    onClick={handleClick}
                >
                    <span className="font-bold text-md">
                        {data.card.card.title} (
                        {data.card.card.itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>
                {expandItems && <ItemList items={data.card.card.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;
