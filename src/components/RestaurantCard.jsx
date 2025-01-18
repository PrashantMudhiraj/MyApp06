import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId, sla, costForTwo } =
        resData?.info;

    const truncatedCuisines =
        cuisines.length > 4 ? cuisines.slice(0, 4) : cuisines;

    return (
        <div className="m-3 p-4 w-[220px] h-auto bg-red-50 rounded-lg shadow-lg">
            <img
                className="w-[180px] rounded-md"
                src={CDN_URL + cloudinaryImageId}
            />
            <h4 className=" font-bold py-1">{name}</h4>
            <h4>{truncatedCuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export const withDiscountLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute p-1 bg-green-500 rounded-md font-medium">
                    Discount available
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};
export default RestaurantCard;
