import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const CardBody = () => {
    // console.log("cardBody rendered")

    // 1) react variable
    const [newResList, setNewResList] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let url = SWIGGY_URL;
        let response = await fetch(url);
        let myData = await response.json();
        console.log(myData);

        // console.log(myData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info);

        setNewResList(myData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestaurant(myData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // 2) using conditional rendering

    return newResList.length === 0 ? <Shimmer /> : (
        <div className="card-body">
            <div className="search">

                <input className="search-box" type="text"
                    onChange={(e) => {
                        // console.log(e);
                        setSearchText(e.target.value);
                    }} value={searchText} />

                <button className="search-btn" onClick={() => {
                    console.log(searchText);
                    let filteredRes = newResList.filter((items) => {
                        return items.info.name.includes(searchText)
                    })
                    console.log(filteredRes);
                    setFilteredRestaurant(filteredRes);
                }}>Search</button>
            </div>

            <button className="filter-btn" onClick={() => {
                const filteredRes = newResList.filter((items) => {
                    return items.info.avgRating > 4
                });
                setFilteredRestaurant(filteredRes);
            }}>
                top Restaurant 4 +
            </button>

            <div className="res-container">
                {
                    filteredRestaurant.map((items) => {
                        return <Link to={"/restaurants/" + items.info.id} key={items.info.id}>
                            <RestaurantCard resdata={items} />
                        </Link>
                    })
                }
            </div>
        </div>
    )
}
export default CardBody;