import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";
import Blog from "../Pages/Blog/Blog";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ApartmentDetails from "../Pages/ApartmentDetails/ApartmentDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Agents from "../Pages/Agents/Agents";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                loader:()=>fetch('../estate.json'),
                element:<Home></Home>
            },
            {
                path:'/apartment/:id',
                loader:()=>fetch('../estate.json'),
                element:<PrivateRoute><ApartmentDetails></ApartmentDetails></PrivateRoute>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/agents',
                loader:()=>fetch('../estate.json'),
                element:<PrivateRoute><Agents></Agents></PrivateRoute>
            },
            {
                path:'/update',
                element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])