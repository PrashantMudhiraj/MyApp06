import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId, sla, costForTwo } =
        resData?.info;

    return (
        <div className="res-card">
            <img className="food-logo" src={CDN_URL + cloudinaryImageId} />
            <h4>{name}</h4>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

export default RestaurantCard;
