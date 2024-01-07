import { useEffect, useState } from "react"
import { MENU_URL } from "./constants"

const useRestaurantMenu = (resId) => {
    // console.log("restaurant menu hook called");

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        let url = MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER";
        let response = await fetch(url);
        let mydata = await response.json();
        console.log(mydata);

        setResInfo(mydata?.data);
    }

    return resInfo;
}

export default useRestaurantMenu;