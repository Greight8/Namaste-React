import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError()
    console.log(err);

    return (
        <div>
            <h1>this is error nigga</h1>
            <h1>{err.status + " " + err.data}</h1>
        </div>
    )
}

export default Error;