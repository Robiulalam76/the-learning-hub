import { createBrowserRouter } from "react-router-dom";
import About from "../../Components/About/About";
import Blog from "../../Components/Blog/Blog";
import Checkout from "../../Components/Checkout/Checkout";
import Course from "../../Components/Course/Course";
import Courses from "../../Components/Courses/Courses";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import Faq from "../../Components/Faq/Faq";
import Home from "../../Components/Home/Home";
import Login from "../../Components/User/Login";
import Profile from "../../Components/User/Profile";
import Register from "../../Components/User/Register";
import Main from "../../Layout/Main";
import PriveteRoute from "../PriveteRoute/PriveteRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            {
                path: '/courses',
                loader: () => fetch('https://the-learning-hub-server-robiulalam76.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`https://the-learning-hub-server-robiulalam76.vercel.app/course/${params.id}`),
                element: <Course></Course>
            },
            {
                path: '/checkout/course/:id',
                loader: ({ params }) => fetch(`https://the-learning-hub-server-robiulalam76.vercel.app/checkout/course/${params.id}`),
                element: <PriveteRoute><Checkout></Checkout></PriveteRoute>
            },
            { path: '/faq', element: <Faq></Faq> },
            { path: '/blog', element: <PriveteRoute><Blog></Blog></PriveteRoute> },
            { path: '/about', element: <About></About> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/profile', element: <PriveteRoute><Profile></Profile></PriveteRoute> },
        ]
    }
])

export default router;