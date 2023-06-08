import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass/SelectedClass";
import EnrolledClass from "../pages/Dashboard/Student/EnrolledClass/EnrolledClass";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path: 'selectedClass',
            element: <SelectedClass></SelectedClass>
          },
          {
            path: 'enrolledClass',
            element: <EnrolledClass></EnrolledClass>
          }
        ]
    },
  ]);
 