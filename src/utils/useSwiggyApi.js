import { useState, useEffect } from "react";
import { SWIGGY_URL } from "./constants";

const useSwiggyApi = () => {
    const [resList, setResList] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        let url = SWIGGY_URL;
        let response = await fetch(url);
        let myData = await response.json();
        console.log(myData);

        // console.log(myData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]?.info);

        setResList(myData.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // setFilteredRestaurant(myData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return resList;
}
export default useSwiggyApi;