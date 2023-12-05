const RestaurantCard = (props) => {
    console.log(props);
    const { resdata } = props;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>

            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/x4uyxvihmg8qa3pddkgf" alt="img" />

            <h3>{resdata.name}</h3>
            {/* <h3>{resdata.cfo.text}</h3> */}
            <h3>4.9</h3>
            <h3>40 min</h3>
        </div>
    )
}
export default RestaurantCard;