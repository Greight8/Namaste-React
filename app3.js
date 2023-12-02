import React from "react";
import ReactDOM from "react-dom/client";

// we will make swiggy project components here

// 2) 2nd component 
const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAc70_AzAXbIhHi7mrGc05u_rkNP3jiCsjQ&usqp=CAU" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// 4) 4th component :-
// const StyleCard = {
//     backgroundColor: "#f0f0f0"
// }

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>

            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/x4uyxvihmg8qa3pddkgf" alt="img" />

            <h3>mosi foods</h3>
            <h3>briyani ,usa ,crocodile</h3>
            <h3>4.9</h3>
            <h3>40 min</h3>
        </div>
    )
}

// 3) 3rd component
const CardBody = () => {
    return (
        <div className="card-body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

// 1) 1st component AppLayout :- here we will put all other components
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <CardBody />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);