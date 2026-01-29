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
        Component: AddCampaign
      },
      {
        path: "/donation",
        Component: Donation
      },
      {
        path: "/myCampaign",
        Component: MyCampaign
      },
    ],
  },
]);

export default router;