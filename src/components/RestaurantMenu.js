import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
    const [restaurantInfo, setRestaurantInfo] = useState(null)

    console.log(useState());

    // const params = useParams();
    // console.log(params);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        // let url = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6805926&lng=77.4587239&restaurantId=340382&catalog_qa=undefined&submitAction=ENTER"
        // let url = `${MENU_URL}${resId}&submitAction=ENTER`;
        // let url = { MENU_URL } + { resId }

        let response = await fetch(MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER");
        // let response = await fetch(url);
        let mydata = await response.json();

        console.log(mydata);

        setRestaurantInfo(mydata?.data);
    }

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

            {itemCards.map((items) => {
                return (
                    <ul key={items.card?.info?.id}>
                        <li>{items.card?.info?.name} - <b>Rs {(items.card?.info?.price) / 100 || (items.card?.info?.defaultPrice) / 100}</b></li>
                    </ul>
                )
            })}

        </>
    )
}

export default RestaurantMenu;