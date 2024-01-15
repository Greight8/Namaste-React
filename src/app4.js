import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import CardBody from "./components/CardBody";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
// import Grocery from "./components/Grocery";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// 2) doing lazy loading / dynamic bundling here :-
const Grocery = lazy(() => {
    return import("./components/Grocery");
})

// 1) 1st component AppLayout :- here we will put all other components
const AppLayout = () => {
    // console.log(<CardBody />);

    // 3) making a state to update name in our UserContext
    const [userName, setUserName] = useState()

    // 3) let us assume we have login/logout feature and we are getting user name from our dummy data
    useEffect(() => {
        const data = {
            name: "akshay saini"
        }
        setUserName(data.name);
    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app">
                    <UserContext.Provider value={{ loggedInUser: "elon musk" }} >
                        <Header />
                    </UserContext.Provider>

                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
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
                        element: <Suspense fallback={<h2>Loading....</h2>}>
                            <Grocery />
                        </Suspense>
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