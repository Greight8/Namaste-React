import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props);
    const { resdata } = props;

    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, deliveryTime } = resdata?.data;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>

            <img className="res-logo" src={`${CDN_URL}${cloudinaryImageId}`} alt="img" />

            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwo / 100} rs for two</h3>
            <h3>{avgRating} stars</h3>
            <h3>{deliveryTime} min</h3>
        </div>
    )
}
export default RestaurantCard;