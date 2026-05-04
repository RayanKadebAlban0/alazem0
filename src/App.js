import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import { routs } from "../src/router/index";
import PageNotFound from "../src/pages/page-not-found/index"

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
       errorElement: <PageNotFound />,
      children: routs,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
