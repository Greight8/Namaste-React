import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    console.log("restaurant menu called")

    const { resId } = useParams();

    // 1) using our custom hook to get data from live api here :-
    const restaurantInfo = useRestaurantMenu(resId)

    if (restaurantInfo === null) {
        return <Shimmer />
    }

    const { name, costForTwoMessage, avgRating, cuisines } = restaurantInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (
        <>
            <h1>{name}</h1>
            <p>{costForTwoMessage}</p>
            <p>{cuisines.join(", ")}</p>
            <p>{avgRating} rating</p>

            <h1>Menu</h1>
            {/* <h2>itemCards[0]?.card?.info?.name}</h2>
            <h2>itemCards[1]?.card?.info?.name}</h2>
            <h2>itemCards[2]?.card?.info?.name}</h2> */}

            {
                !itemCards ? <h2> No Menu Available</h2> :
                    itemCards.map((items) => {
                        return (
                            <ul key={items.card?.info?.id}>
                                <li>{items.card?.info?.name} - <b>Rs {(items.card?.info?.price) / 100 || (items.card?.info?.defaultPrice) / 100}</b></li>
                            </ul>
                        )
                    })
            }

        </>
    )
}

export default RestaurantMenu;