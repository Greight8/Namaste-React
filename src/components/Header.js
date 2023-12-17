import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

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
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
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