import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home.jsx";
import Blogs from "../pages/Blogs.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/blogs",
                element: <Blogs/>,
                loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7")
            }
        ]
    },
]);
