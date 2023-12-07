import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData"
import { useEffect, useState } from "react";

const CardBody = () => {
    // 2) react variable
    const [newResList, setNewResList] = useState(resObj);

    useEffect(()=>{
        console.log("useeffect called");
    },[])

    console.log("card body rendered");

    return (
        <div className="card-body">
            <button className="filter-btn" onClick={() => {
                const filteredRes = newResList.filter((items) => {
                    return items.data.avgRating > 4
                });
                setNewResList(filteredRes);
            }}>
                top Restaurant
            </button>

            <div className="res-container">
                {
                    newResList.map((items) => {
                        return <RestaurantCard key={items.data.id} resdata={items} />
                    })
                }
            </div>
        </div>
    )
}
export default CardBody;