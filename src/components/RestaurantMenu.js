import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    // console.log("restaurant menu called")

    const { resId } = useParams();

    // 5) making a state to only expand one accordian ata a time
    const [showIndex, setShowIndex] = useState(null)

    // 1) older way to get only one heading (recomended) from itemcard 
    // const { itemCards } = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card


    // 2) using our custom hook to get data from live api here :-
    const restaurantInfo = useRestaurantMenu(resId)

    if (restaurantInfo === null) {
        return <Shimmer />
    }


    // 3) destructuring things from restaurantInfo :-
    const { name, costForTwoMessage, avgRating, cuisines } = restaurantInfo?.cards[0]?.card?.card?.info;


    // 4) filtering only ItemCategory from restaurantInfo :-
    const categories = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => {
        return category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    // console.log(categories);

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
                    categories.map((category, index) => {
                        return <RestaurantCategory
                            key={category?.card?.card?.title}
                            data={category?.card?.card}
                            // showItem={index === 1 ? true : false}
                            showItem={index === showIndex ? true : false}
                            setMyShowIndex={() => { setShowIndex(index) }}
                        />
                    })
                }
            </div>
        </>
    )
}

export default RestaurantMenu;