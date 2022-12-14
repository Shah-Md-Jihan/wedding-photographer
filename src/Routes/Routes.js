import { useContext } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthProvider";
import Main from "../Layouts/Main";
import AboutDetail from "../Pages/About/AboutDetail";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import UpdateReview from "../Pages/MyReviews/UpdateReview";
import Register from "../Pages/Register/Register";
import AddService from "../Pages/Services/AddService";
import ServiceAll from "../Pages/Services/ServiceAll";
import ServiceDetail from "../Pages/Services/ServiceDetail";
import PrivateRoute from "./PrivateRoute";

// const { user } = useContext(AuthContext);
const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/service',
                element: <ServiceAll></ServiceAll>
            },
            {
                path: '/services/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({ params }) => fetch(`https://weeding-photographer-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/add/service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/my/reviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
            },
            {
                path: '/my/reviews/update/:id',
                element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://weeding-photographer-server.vercel.app/my/reviews/update/${params.id}`)
            },
            {
                path: '/about',
                element: <AboutDetail></AboutDetail>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);


export default routes;