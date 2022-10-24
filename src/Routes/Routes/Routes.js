import { createBrowserRouter } from "react-router-dom";
import About from "../../Components/About/About";
import Blog from "../../Components/Blog/Blog";
import Courses from "../../Components/Courses/Courses";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import Home from "../../Components/Home/Home";
import Login from "../../Components/User/Login";
import Profile from "../../Components/User/Profile";
import Register from "../../Components/User/Register";
import Main from "../../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/courses', element: <Courses></Courses> },
            { path: '/blog', element: <Blog></Blog> },
            { path: '/about', element: <About></About> },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            { path: '/profile', element: <Profile></Profile> },

        ]
    }
])

export default router;