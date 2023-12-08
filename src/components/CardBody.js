import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const CardBody = () => {
    // 1) react variable
    const [newResList, setNewResList] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"

        let response = await fetch(url);
        let myData = await response.json();
        console.log(myData);
        setNewResList(myData.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // 2) using conditional rendering

    return newResList.length === 0 ? <Shimmer /> :
        (
            <div className="card-body">
                <button className="filter-btn" onClick={() => {
                    const filteredRes = newResList.filter((items) => {
                        return items.info.avgRating > 4
                    });
                    setNewResList(filteredRes);
                }}>
                    top Restaurant
                </button>

                <div className="res-container">
                    {
                        newResList.map((items) => {
                            return <RestaurantCard key={items.info.id} resdata={items} />
                        })
                    }
                </div>
            </div>
        )
}
export default CardBody;