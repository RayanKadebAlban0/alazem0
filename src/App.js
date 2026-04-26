import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import { routs } from "../src/router/index";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routs,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
