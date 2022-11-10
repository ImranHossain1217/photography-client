import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import AddReview from "../components/AddReview";
import AllService from "../components/AllService";
import Blog from "../components/Blog";
import Home from "../components/Home";
import Login from "../components/Login";
import MyReview from "../components/MyReview";
import ServiceDetails from "../components/ServiceDetails";
import SignUp from "../components/SignUp";
import Main from "../layout/Main";

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
            loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path:'addReview',
            element:<AddReview></AddReview>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signUp',
            element:<SignUp></SignUp>
        }
    ]
   }
])