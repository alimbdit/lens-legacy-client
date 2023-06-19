import { Link, NavLink} from "react-router-dom";
import logo from "../../../../public/logo.png";
import useAuth from "../../../hooks/useAuth";
import { motion } from 'framer-motion';
import {MdLightMode, MdDarkMode} from 'react-icons/md'
import { useEffect, useState } from "react";

const Navbar = () => {

  const {user, logOut} = useAuth()
  // console.log(user)
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])


  useEffect(()=>{

    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }

  }, [theme])



  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navOptions = <><li>
  <NavLink
    to="/"
    className={({ isActive }) => (isActive ? "active" : "inactive")}
  >
    Home
  </NavLink>
</li>
<li>
  <NavLink
    to="/instructors"
    className={({ isActive }) => (isActive ? "active" : "inactive")}
  >
    Instructors
  </NavLink>
</li>
<li>
  <NavLink
    to="/classes"
    className={({ isActive }) => (isActive ? "active" : "inactive")}
  >
    Classes
  </NavLink>
</li>
<li>
  <NavLink
    to="/contact"
    className={({ isActive }) => (isActive ? "active" : "inactive")}
  >
    Contact
  </NavLink>
</li>
{
  user && user.email && <li>
  <NavLink
    to="/dashboard/dashboard"
    className={({ isActive }) => (isActive ? "active" : "inactive")}
  >
    Dashboard
  </NavLink>
</li>
}
</>;

  return (
    <>
      <div className="navbar dark:bg-black bg-base-100 pl-3 pr-5 lg:px-10 py-5">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost  dark:border  dark:text-white lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="space-y-2 z-50 dropdown-content dark:bg-gray-900 bg-white mt-3  p-3 shadow  rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to='/' className="flex justify-center items-center gap-2">
            <img className="w-8 h-8" src={logo} alt="" />
            <h1 className="text-2xl lg:text-4xl font-extrabold">
              <span className="text-secondary">Lens</span> <span className="dark:text-white">Legacy</span>
            </h1>
          </Link>
          <div onClick={handleThemeSwitch} className="mx-10 border-gray-600 dark:border-white  border-2 p-[2px] cursor-pointer rounded-lg">
           {
            theme === "dark" ? <MdLightMode className="lg:text-4xl text-xl text-white"/> :
            <MdDarkMode  className="lg:text-4xl text-xl text-gray-600"/>
            }
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 px-1">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end lg:w-full">
          {
            user && user?.email ? <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 border border-primary rounded-full">
                <img referrerPolicy = "no-referrer" src={user?.photoURL} />
              </div>
            </label>
            <ul onClick={logOut}
              tabIndex={0}
              className=" z-50 dropdown-content text-center text-primary  mt-1 p-2 shadow bg-base-100 rounded-box w-24 hover:bg-primary border-2 border-primary duration-300 hover:text-white cursor-pointer"
            >
              <li>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}  className="font-semibold ">Logout</motion.button>
              </li>
            </ul>
          </div> : <Link className="btn btn-primary text-white" to='/login'>Login</Link>
          }

        </div>
      </div>
    </>
  );
};

export default Navbar;
