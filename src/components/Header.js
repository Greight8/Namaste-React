import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useStatusOnline from "../utils/useStatusOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    // let btnName = "login";
    // console.log("body component rendered");

    const [newBtnName, setNewBtnName] = useState("login");

    // 1) without dependency array
    // useEffect(() => {
    //     console.log("useeffect is called");
    // })

    // 2) with empty dependency array
    useEffect(() => {
        // console.log("useeffect is called");
    }, []);

    // 3)  dependency array with a dependency
    // useEffect(() => {
    //     console.log("useeffect is called");
    // }, [newBtnName]);



    // 4) importing online status custom hook here :-
    const myOnlineStatus = useStatusOnline();

    // 5) using UserContext through context api hook here :-  
    const data = useContext(UserContext);
    // console.log(data);

    // 6) subscribing to our redux store through selector hook
    const cartItem = useSelector((store) => {
        return store.cart.items
    })
    console.log(cartItem)

    // 6) never do this way , never subscribe to the whole store , only subscribe to a particular part of store , this will hamper our performance


    return (
        <div className="flex justify-between  bg-pink-100 shadow-lg">
            <div>
                <img className="w-28" src={LOGO_URL} />
            </div>

            <div className="flex items-center">
                <ul className="flex px-4">
                    <li className="px-4">
                        status:{myOnlineStatus ? "✔️" : "❎"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold">
                        <Link to="/cart">Cart ({cartItem.length} items)</Link>
                    </li>

                    <button onClick={() => {
                        // btnName = "logout";
                        // btnName === "login" ? "logout" : "login";
                        // if (btnName === "login") {
                        //     btnName = "logout"
                        // }
                        // else if (btnName === "logout") {
                        //     btnName = "login"
                        // }
                        // console.log(btnName);

                        newBtnName === "login" ? setNewBtnName("logout") : setNewBtnName("login")
                    }} className="login-btn">{newBtnName}</button>

                    <li className="px-4">
                        {data.loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;