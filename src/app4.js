import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import CardBody from "./components/CardBody";

// we will make swiggy project components here

// 4) 4th component RestaurantCard :-
// const StyleCard = {
//     backgroundColor: "#f0f0f0"
// }



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