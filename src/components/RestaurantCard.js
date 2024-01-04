import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props);
    const { resdata } = props;

    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } = resdata?.info;

    // const { deliveryTime } = resdata?.info?.sla;

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg  bg-gray-200 hover:bg-gray-400">

            <img className="rounded-lg h-[150px] mx-auto" src={`${CDN_URL}${cloudinaryImageId}`} alt="img" />

            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwo}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{sla?.slaString}</h3>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    // retuning a new component using arrow functions
    return (props) => {
        return (
            <div className="absolute bg-black text-white m-2 p-2 rounded-lg">
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;