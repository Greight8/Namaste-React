import { useEffect, useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const { name } = props;

    useEffect(() => {
        getData();

        const timer = setInterval(() => {
            console.log("called after every 1 second")
        }, 1000);

        return (() => {
            console.log("will unmount interval now");
            clearInterval(timer);
        })
    }, [])

    async function getData() {
        let url = "https://api.github.com/users";
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }

    return (
        <div className="user-card">
            <h2>count:{count}</h2>
            <h2>{name}</h2>
            <h3>Location:Delhi</h3>
            <h4>Contact: @cwh</h4>
        </div>
    )
}

export default User;