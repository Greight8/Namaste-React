import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "harry",
})

export default UserContext;