import {
     createBrowserRouter,
} from "react-router-dom";
import Main from "../Laout/Main";
import ErrorPage from "../shared/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
     {
          path: "/",
          element: <Main></Main>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
               {
                    path: 'register',
                    element: <Register></Register>
               },
               {
                    path: 'login',
                    element: <Login></Login>
               },
               // {
               //      path: "/",
               //      element: <Home></Home>
               // },
          ]
     },
    
]);