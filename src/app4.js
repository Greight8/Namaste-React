import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import CardBody from "./components/CardBody";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import Grocery from "./components/Grocery";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

// 1) 1st component AppLayout :- here we will put all other components
const AppLayout = () => {
    // console.log(<CardBody />);
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            children:
                [
                    {
                        path: "/",
                        element: <CardBody />
                    },
                    {
                        path: "/about",
                        element: <About />
                    },
                    {
                        path: "/contact",
                        element: <Contact />
                    },
                    {
                        path: "/grocery",
                        element: <Grocery />
                    },
                    {
                        path: "/restaurants/:resId",
                        element: <RestaurantMenu />
                    },
                ],
            errorElement: <Error />
        }
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);