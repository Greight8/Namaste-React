import { useState } from "react";

const User = (props) => {
    const [count] = useState(0);
    const { name } = props;

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