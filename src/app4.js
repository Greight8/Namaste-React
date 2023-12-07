import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import CardBody from "./components/CardBody";

// 1) 1st component AppLayout :- here we will put all other components
const AppLayout = () => {
    // console.log(<CardBody />);
    return (
        <div className="app">
            <Header />
            <CardBody />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);