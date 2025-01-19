import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { Provider } from "react-redux";

import {
    Header,
    Body,
    About,
    Contact,
    Error,
    RestaurantsMenu,
} from "./components/index";
import userContext from "./utils/userContext";
import appStore from "./Redux/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const AppComponent = () => {
    const [userName, setUserName] = useState("Guest");

    useEffect(() => {
        //Authentication process (API CALL)
        const data = {
            name: "Prashant",
        };
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <userContext.Provider
                value={{ loggedInUser: userName, setUserName }}
            >
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </userContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppComponent />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantsMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
