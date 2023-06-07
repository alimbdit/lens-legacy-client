import { Link, NavLink} from "react-router-dom";
import logo from "../../../../public/logo.png";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {

  const {user, logOut} = useAuth()

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
{
  user && user.email && <li>
  <NavLink
    to="/dashboard"
    className={({ isActive }) => (isActive ? "active" : "inactive")}
  >
    Dashboard
  </NavLink>
</li>
}
</>;

  return (
    <>
      <div className="navbar bg-base-100 pl-3 pr-5 lg:px-10 py-5">
        <div className="navbar-start w-full">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="space-y-2 dropdown-content bg-white mt-3  p-3 shadow  rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img className="w-8 h-8" src={logo} alt="" />
            <h1 className="text-2xl lg:text-4xl font-extrabold">
              <span className="text-secondary">Lens</span> <span >Legacy</span>
            </h1>
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
            <ul
              tabIndex={0}
              className=" dropdown-content text-center mt-3 p-2 shadow bg-base-100 rounded-box w-24 hover:bg-primary duration-300 hover:text-white cursor-pointer"
            >
              <li>
                <button onClick={logOut} className="font-semibold ">Logout</button>
              </li>
            </ul>
          </div> : <Link className="btn btn-primary" to='/login'>Login</Link>
          }
        </div>
      </div>
    </>
  );
};

export default Navbar;
