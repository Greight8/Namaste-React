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


    // 4) using conditional rendering

    return newResList.length === 0 ? <Shimmer /> : (
        <div className="card-body">
            <div className="flex m-3">

                <input className=" m-4 p-1 border border-solid border-black" type="text"
                    onChange={(e) => {
                        // console.log(e);
                        setSearchText(e.target.value);
                    }} value={searchText} />

                <button className="px-4 py-2 bg-green-100 m-4" onClick={() => {
                    console.log(searchText);
                    let filteredRes = newResList.filter((items) => {
                        return items.info.name.includes(searchText)
                    })
                    console.log(filteredRes);
                    setFilteredRestaurant(filteredRes);
                }}>Search</button>

                <button className="" onClick={() => {
                    const filteredRes = newResList.filter((items) => {
                        return items.info.avgRating > 4.2
                    });
                    setFilteredRestaurant(filteredRes);
                }}>
                    top Restaurant 4.2 +
                </button>
            </div>

            <div className="flex flex-wrap justify-center items-center">
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