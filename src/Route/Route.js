import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Blog from "../components/Blog";
import Home from "../components/Home";
import MyReview from "../components/MyReview";
import Service from "../components/Service";
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
            path:'/service',
            element:<Service></Service>
        },
        {
            path:'/myreview',
            element:<MyReview></MyReview>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        }
    ]
   }
])