import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData"

const CardBody = () => {
    return (
        <div className="card-body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resObj.map((items) => {
                        return <RestaurantCard key={items.data.id} resdata={items} />
                    })
                }
            </div>
        </div>
    )
}
export default CardBody;