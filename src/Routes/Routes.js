import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AboutDetail from "../Pages/About/AboutDetail";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceAll from "../Pages/Services/ServiceAll";


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