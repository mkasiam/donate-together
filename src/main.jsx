import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Donation from "./components/Donation/Donation";
import DonationDetails from "./components/DonationDetails/DonationDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import Statistics from "./components/Statistics/Statistics";
import "./index.css";
import Banner from "./components/Banner/Banner";
import Categories from "./components/Categories/Categories";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch("../public/categories.json")
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch("../public/categories.json")
      },
      {
        path:"donation/:id",
        element:<DonationDetails></DonationDetails>,
        loader:()=>fetch("../public/categories.json")
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader:()=>fetch("../public/categories.json")
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
