import React from "react";
import { useState, useContext, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
// import useSwiggyApi from "../utils/useSwiggyApi";
import useStatusOnline from "../utils/useStatusOnline";
import UserContext from "../utils/UserContext";
import { SWIGGY_URL } from "../utils/constants";

const CardBody = () => {
    // console.log("cardBody rendered")

    // 1) react variable
    const [newResList, setNewResList] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("")

    // 2) doing api call through old way :-
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let url = SWIGGY_URL;
        let response = await fetch(url);
        let myData = await response.json();
        // console.log(myData);

        // console.log(myData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info);

        setNewResList(myData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestaurant(myData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // 2.1) importing swiggy api custom hook here :-    
    // const newResList = useSwiggyApi();
    // setFilteredRestaurant(newResList);


    // 3) importing online status custom hook here :-
    const myOnlineStatus = useStatusOnline();

    if (myOnlineStatus === false) {
        return (
            <h2>you are offline || Kindly check your internet</h2>
        )
    }

    // 4) importing withPromotedLabel component here :-
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    // 5) using setUserName through useContext hook 
    const { loggedInUser, setUserName } = useContext(UserContext)


    // 4) using conditional rendering

    return newResList.length === 0 ? <Shimmer /> : (
        <div>
            <div className="flex justify-center items-center mt-3">

                <input data-testid="searchInput" className="  p-1 border border-solid border-black" type="text"
                    onChange={(e) => {
                        // console.log(e);
                        setSearchText(e.target.value);
                    }} value={searchText} />

                <button className="px-2 bg-green-100 m-3 h-10 rounded-lg" onClick={() => {
                    console.log(searchText);

                    function capitalizeFirstLetter(string) {
                        return string.charAt(0).toUpperCase() + string.slice(1);
                    }

                    let filteredRes = newResList.filter((items) => {
                        return items.info.name.includes(capitalizeFirstLetter(searchText))
                    })
                    // console.log(filteredRes);
                    setFilteredRestaurant(filteredRes);
                }}>Search</button>

                <div className="m-7 p-4">
                    <button className="" onClick={() => {
                        const filteredRes = newResList.filter((items) => {
                            return items.info.avgRating > 4.2
                        });
                        setFilteredRestaurant(filteredRes);
                    }}>
                        top Restaurant 4.2 +
                    </button>
                </div>

                <div className="m-4 p-4 flex items-center">
                    <label className="mr-2">search</label>
                    <input className="border border-black p-2" value={loggedInUser} onChange={(e) => {
                        setUserName(e.target.value)
                    }} />
                </div>

            </div>

            <div className="flex flex-wrap justify-center items-center">
                {
                    filteredRestaurant.map((items) => {
                        return <Link to={"/restaurants/" + items.info.id} key={items.info.id}>
                            {items.info.promoted ?
                                <RestaurantCardPromoted resdata={items.info} /> :
                                <RestaurantCard resdata={items.info} />}
                        </Link>
                    })
                }
            </div>
        </div>
    )
}
export default CardBody;