import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react"

class About extends Component {
    constructor() {
        super();
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent componentDidMount");
    }

    render() {
        console.log("Parent render")
        return (
            <div>
                <h2>This Namaste React web series</h2>
                <User name="Harry (func)" />
                {/* <UserClass name="first child" location={"Dehradun"} user="akshaymarch7" /> */}
                {/* <UserClass name="second child" location={"Dehradun"} user="mojombo" /> */}
                {/* <UserClass name="third child" location={"Dehradun"} /> */}
                {/* <UserClass name="fourth child" location={"Dehradun"} /> */}
            </div>
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