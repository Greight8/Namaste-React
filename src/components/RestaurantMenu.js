import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    // console.log("restaurant menu called")

    const { resId } = useParams();

    // 1) using our custom hook to get data from live api here :-
    const restaurantInfo = useRestaurantMenu(resId)

    if (restaurantInfo === null) {
        return <Shimmer />
    }

    const { name, costForTwoMessage, avgRating, cuisines } = restaurantInfo?.cards[0]?.card?.card?.info;

    // const { itemCards } = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    const categories = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => {
        return category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    console.log(categories);

    return (
        <>
            <div className="text-center">
                <h1 className="font-bold my-6 text-2xl">{name}</h1>
                <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>

                {/* <h1>Menu</h1> */}
                {/* <h2>itemCards[0]?.card?.info?.name}</h2>
            <h2>itemCards[1]?.card?.info?.name}</h2>
            <h2>itemCards[2]?.card?.info?.name}</h2> */}

                {/* {
                !itemCards ? <h2> No Menu Available</h2> :
                    itemCards.map((items) => {
                        return (
                            <ul key={items.card?.info?.id}>
                                <li>{items.card?.info?.name} - <b>Rs {(items.card?.info?.price) / 100 || (items.card?.info?.defaultPrice) / 100}</b></li>
                            </ul>
                        )
                    })
            } */}

                {
                    categories.map((category) => {
                        return <RestaurantCategory data={category?.card?.card} />
                    })
                }
            </div>
        </>
    )
}

export default RestaurantMenu;