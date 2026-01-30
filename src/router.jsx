import { createBrowserRouter } from "react-router";
import App from './App.jsx'
import MainComponents from "./MainComponents/MainComponents.jsx";
import Home from "./Components/Home.jsx";
import Campaigns from "./Components/Campaigns.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import AddCampaign from "./Components/AddCampaign.jsx";
import Donation from "./Components/Donation.jsx";
import MyCampaign from "./Components/MyCampaign.jsx";
import Private from "./Components/Private.jsx";
import Error from "./Components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainComponents,
    children: [
      { index: true, Component: Home },
      {
        path: "/campaigns",
        Component: Campaigns
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/addCampaign",
        element : <Private><AddCampaign></AddCampaign></Private>,
      },
      {
        path: "/myDonations",
        element : <Private><Donation></Donation></Private>
      },
      {
        path: "/myCampaign",
        element : <Private><MyCampaign></MyCampaign></Private>
      },
    ],
  },
  {
        path: "/*",
        Component: Error
      },
]);

export default router;