import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId, sla, costForTwo } =
        resData?.info;

    const truncatedCuisines =
        cuisines.length > 4 ? cuisines.slice(0, 4) : cuisines;

    return (
        <div className="res-card">
            <img className="food-logo" src={CDN_URL + cloudinaryImageId} />
            <h4>{name}</h4>
            <h4>{truncatedCuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export default RestaurantCard;
