import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import CardBody from "./components/CardBody";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

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

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <Error />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        },
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);