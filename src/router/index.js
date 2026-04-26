import React from "react";
import SideBar from "../components/side-bar/index.jsx";
 const Home = React.lazy(() => import("../pages/home/index.jsx"));

export const routs = [
    {
        path: "/",
        element:<Home/>,
    },
    {
        path: "SideBar /",
        element: <SideBar/>,
    }
]
