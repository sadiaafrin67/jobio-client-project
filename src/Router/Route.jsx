import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import AddJob from "../Pages/AddJob/AddJob";
import MyJob from "../Pages/MyJob/MyJob";
import MyBid from "../Pages/MyBid/MyBid";
import BidReq from "../Pages/BidReq/BidReq";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Error/ErrorPage";


const route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/addjob",
                element: <AddJob></AddJob>,
            },
            {
                path: "/myjob",
                element: <MyJob></MyJob>,
            },
            {
                path: "/mybids",
                element: <MyBid></MyBid>,
            },
            {
                path: "/bidreq",
                element: <BidReq></BidReq>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            }
        ]
      },
])

export default route;