import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";
import Blog from "../Pages/Blog/Blog";
import Update from "../Pages/Update/Update";
import Profile from "../Pages/Profile/Profile";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ApartmentDetails from "../Pages/ApartmentDetails/ApartmentDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path:'/update',
                element:<Update></Update>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
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