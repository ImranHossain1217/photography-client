import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import AddReview from "../components/AddReview";
import AddService from "../components/AddService";
import AllService from "../components/AllService";
import Blog from "../components/Blog";
import Home from "../components/Home";
import Login from "../components/Login";
import MyReview from "../components/MyReview";
import ServiceDetails from "../components/ServiceDetails";
import SignUp from "../components/SignUp";
import Main from "../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const route = createBrowserRouter([ 
    {
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        },
        {
            path:'/services',
            element:<AllService></AllService>
        },
        {
            path:'/myreview',
            element:<MyReview></MyReview>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/details/:id',
            element:<ServiceDetails></ServiceDetails>,
            loader:({params}) => fetch(`https://photography-server-beta.vercel.app/${params.id}`)
        },
        {
            path:'addReview',
            element:<PrivateRoute><AddReview></AddReview></PrivateRoute>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        },
        {
            path:'/addService',
            element:<PrivateRoute><AddService></AddService></PrivateRoute>
        }
    ]
   }
])