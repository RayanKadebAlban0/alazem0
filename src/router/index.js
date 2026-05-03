import React from "react";
const Home = React.lazy(() => import("../pages/home/index.jsx"));
const LandinPage = React.lazy(() => import("../pages/landing-page/index.jsx"));
const Dashboard = React.lazy(() => import("../pages/dashboard/index.jsx"));

export const routs = [

  {
    path: "/",
    element: <LandinPage />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  //   {
  //   path: "/LogoPhoto",
  //   element: < LandinPage/>,
  // },
];
