import ErrorEl from "../components/Error/ErrorEl";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/LoginReg/Login";
import Register from "../pages/LoginReg/Register";

const { createBrowserRouter } = require("react-router-dom");

const router= createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<ErrorEl/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    }
])

export default router;