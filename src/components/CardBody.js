import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData"
import { useState } from "react";

const CardBody = () => {
    // 2) react variable
    const [listOfRestaunt2, setlistOfRestaunt2] = useState(
        {
            data: {
                id: "73011",
                name: "KFC",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["American", "Snacks", "Biryani"],

                costForTwo: 30000,
                deliveryTime: 31,
                avgRating: "3.8",

            }
        },
        {
            data: {
                id: "73012",
                name: "Dominos",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["American", "Snacks", "Biryani"],
                costForTwo: 30000,
                deliveryTime: 31,
                avgRating: "4.5",
            },
        }
    )

    // 1) normal js func
    let listOfRestaunt = [
        {
            data: {
                id: "73011",
                name: "KFC",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["American", "Snacks", "Biryani"],

                costForTwo: 30000,
                deliveryTime: 31,
                avgRating: "3.8",

            }
        },
        {
            data: {
                id: "73012",
                name: "Dominos",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines: ["American", "Snacks", "Biryani"],
                costForTwo: 30000,
                deliveryTime: 31,
                avgRating: "4.5",
            },
        }
    ]

    return (
        <div className="card-body">
            <button className="filter-btn" onClick={() => {
                listOfRestaunt = listOfRestaunt.filter((items) => {
                    console.log("using filter")
                    return items.data.avgRating > 4
                });
                console.log(listOfRestaunt);
            }}>top Restaurant</button>

            <div className="res-container">
                {
                    listOfRestaunt.map((items) => {
                        return <RestaurantCard key={items.data.id} resdata={items} />
                    })
                }
            </div>
        </div>
    )
}
export default CardBody;