import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useSwiggyApi from "../utils/useSwiggyApi";
import useStatusOnline from "../utils/useStatusOnline";

const CardBody = () => {
    // console.log("cardBody rendered")

    // 1) react variable
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("")


    // 2) importing swiggy api custom hook here :-    
    const newResList = useSwiggyApi();
    // setFilteredRestaurant(newResList);


    // 3) importing online status custom hook here :-
    const myOnlineStatus = useStatusOnline();

    if (myOnlineStatus === false) {
        return (
            <h2>you are offline || Kindly check your internet</h2>
        )
    }


    // 3) using conditional rendering

    return newResList.length === 0 ? <Shimmer /> : (
        <div className="card-body">
            <div className="search">

                <input className="search-box" type="text"
                    onChange={(e) => {
                        // console.log(e);
                        setSearchText(e.target.value);
                    }} value={searchText} />

                {/* <button className="search-btn" onClick={() => {
                    console.log(searchText);
                    let filteredRes = newResList.filter((items) => {
                        return items.info.name.includes(searchText)
                    })
                    console.log(filteredRes);
                    setFilteredRestaurant(filteredRes);
                }}>Search</button> */}
            </div>

            {/* <button className="filter-btn" onClick={() => {
                const filteredRes = newResList.filter((items) => {
                    return items.info.avgRating > 4
                });
                setFilteredRestaurant(filteredRes);
            }}>
                top Restaurant 4 +
            </button> */}

            <div className="res-container">
                {
                    newResList.map((items) => {
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