import { createContext } from "react";

const userContext = createContext({
    loggedInUser: "Guest",
});

export default userContext;
