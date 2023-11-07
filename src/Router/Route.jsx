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
import PrivateRoute from "./PrivateRoute";
import Jobdetails from "../Pages/Home/Job/Jobdetails";
import Update from "../Update/Update";



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
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
            },
            {
                path: "/myjob",
                element: <PrivateRoute><MyJob></MyJob></PrivateRoute>,
            },
            {
                path: "/mybids",
                element: <PrivateRoute><MyBid></MyBid></PrivateRoute>,
               
            },
            {
                path: "/bidreq",
                element: <PrivateRoute><BidReq></BidReq></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: '/job/:id',
                element: <PrivateRoute><Jobdetails></Jobdetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`),
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
            }
        ]
      },
])

export default route;