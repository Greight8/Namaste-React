import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    // let btnName = "login";
    console.log("body component rendered");

    const [newBtnName, setNewBtnName] = useState("login");

    // 1) without dependency array
    // useEffect(() => {
    //     console.log("useeffect is called");
    // })

    // 2) with empty dependency array
    useEffect(() => {
        console.log("useeffect is called");
    }, []);

    // 3)  dependency array with a dependency
    // useEffect(() => {
    //     console.log("useeffect is called");
    // }, [newBtnName]);

    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>

                    <li>Cart</li>
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
                </ul>
            </div>
        </div>
    )
}

export default Header;