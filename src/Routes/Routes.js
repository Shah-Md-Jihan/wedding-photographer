import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AboutDetail from "../Pages/About/AboutDetail";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddService from "../Pages/Services/AddService";
import ServiceAll from "../Pages/Services/ServiceAll";
import ServiceDetail from "../Pages/Services/ServiceDetail";


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
                loader: ({ params }) => fetch(`http://127.0.0.1:5000/services/${params.id}`)
            },
            {
                path: '/add/service',
                element: <AddService></AddService>
            },
            {
                path: '/about',
                element: <AboutDetail></AboutDetail>
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