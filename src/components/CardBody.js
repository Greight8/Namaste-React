import { useState, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useSwiggyApi from "../utils/useSwiggyApi";
import useStatusOnline from "../utils/useStatusOnline";
import UserContext from "../utils/UserContext";

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

    // 4) importing withPromotedLabel component here :-
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    // 5) using setUserName through useContext hook 
    const { loggedInUser, setUserName } = useContext(UserContext)


    // 4) using conditional rendering

    return newResList.length === 0 ? <Shimmer /> : (
        <div className="card-body">
            <div className="flex m-3">

                <input className=" m-8 p-1 border border-solid border-black" type="text"
                    onChange={(e) => {
                        // console.log(e);
                        setSearchText(e.target.value);
                    }} value={searchText} />

                <button className="px-2 bg-green-100 m-4" onClick={() => {
                    console.log(searchText);
                    let filteredRes = newResList.filter((items) => {
                        return items.info.name.includes(searchText)
                    })
                    console.log(filteredRes);
                    setFilteredRestaurant(filteredRes);
                }}>Search</button>

                <div className="m-4 p-4 flex items-center">
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
                    <label>search</label>
                    <input className="border border-black p-2" value={loggedInUser} onChange={(e) => {
                        setUserName(e.target.value)
                    }} />
                </div>

            </div>

            <div className="flex flex-wrap justify-center items-center">
                {
                    newResList.map((items) => {
                        return <Link to={"/restaurants/" + items.info.id} key={items.info.id}>
                            {items.info.promoted ?
                                <RestaurantCardPromoted resdata={items} /> :
                                <RestaurantCard resdata={items} />}
                        </Link>
                    })
                }
            </div>
        </div>
    )
}
export default CardBody;