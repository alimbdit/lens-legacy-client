import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
      ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    },
  ]);
 