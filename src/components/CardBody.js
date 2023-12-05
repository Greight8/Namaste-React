import RestaurantCard from "./RestaurantCard";

const CardBody = () => {
    return (
        <div className="card-body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resdata={resObj} />
            </div>
        </div>
    )
}
export default CardBody;