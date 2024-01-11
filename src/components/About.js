import React from "react";
// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react"
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor() {
        super();
        // console.log("Parent Constructor");
    }

    componentDidMount() {
        // console.log("Parent componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("Parent componentDidUpdate");
    }

    componentWillUnmount() {
        // console.log("Parent componentWillUnmount");
    }

    render() {
        // console.log("Parent render")
        return (
            <div>
                <h2>This Namaste React web series</h2>
                {/* <User name="Harry (func)" /> */}
                <UserClass name="first child" location={"Dehradun"} user="akshaymarch7" />
                <UserClass name="second child" location={"Dehradun"} user="mojombo" />
                {/* <UserClass name="third child" location={"Dehradun"} /> */}
                {/* <UserClass name="fourth child" location={"Dehradun"} /> */}

                <UserContext.Consumer>
                    {
                        (data) => {
                            console.log(data)
                            return <h1> {data.loggedInUser}</h1>
                        }
                    }
                </UserContext.Consumer>
            </div >
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h2>This Namaste React web series</h2>
//             {/* <User name="Harry (func)" /> */}
//             <UserClass name="Akshay (class)" location={"Dehradun"} />
//         </div>
//     )
// }

export default About;