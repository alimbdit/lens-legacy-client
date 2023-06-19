import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass/SelectedClass";
import EnrolledClass from "../pages/Dashboard/Student/EnrolledClass/EnrolledClass";
import AddClass from "../pages/Dashboard/Instructor/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory/PaymentHistory";
import PrivateRoute from "./PrivateRoute";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import Payment from "../pages/Dashboard/Student/Payment/Payment";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import AllFreeTutorials from "../pages/AllFreeTutorials/AllFreeTutorials";
import Player from "../components/Player/Player";
import ContactUs from "../pages/ContactUs/ContactUs";




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
        {
          path: '/classes',
          element: <Classes></Classes>
        },
        {
          path: '/instructors',
          element: <Instructors></Instructors>
        },
        {
          path: '/tutorials',
          element: <AllFreeTutorials></AllFreeTutorials>
        },
        {
          path: '/player',
          element: <Player></Player>
        },
        {
          path: '/contact',
          element: <ContactUs></ContactUs>
        },
      ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path:'dashboard',
            element:<DashboardHome></DashboardHome>
          },
          {
            path: 'selectedClass',
            element: <SelectedClass></SelectedClass>
          },
          {
            path: 'enrolledClass',
            element: <EnrolledClass></EnrolledClass>
          },
          {
            path: 'paymentHistory',
            element: <PaymentHistory></PaymentHistory>
          },
          {
            path:'payment',
            element: <Payment></Payment>
          },
          {
            path: 'addClass',
            element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
          },
          {
            path: 'myClass',
            element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
          },
          {
            path: 'manageClasses',
            element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
          },
          {
            path: 'manageUsers',
            element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
          },
        ]
    },
  ]);
 