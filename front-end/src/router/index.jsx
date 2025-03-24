import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../pages/Users";
import Not_found from "../pages/Not_found";
import Lyaout from "../layouts/Layout";

export const router = createBrowserRouter([
    {
        element: <Lyaout/>,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '*',
                element: <Not_found />
            },
        ]
    }
    
]);

