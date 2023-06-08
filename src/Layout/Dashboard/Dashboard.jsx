import { NavLink, Outlet } from "react-router-dom";
import { MdClass, MdPayments } from "react-icons/md";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start">
          {/* Page content here */}
          <label
            htmlFor="dashboard-menu"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Menu
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-menu" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 h-full bg-primary text-base-content">
            {/* Sidebar content here */}
            <div className="text-center my-4">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <h3 className="text-lg">{user?.email}</h3>
            </div>
            <div className="divider"></div> 
            <li>
              <NavLink
                to="/dashboard/selectedClass"
                className={({ isActive }) =>
                  isActive ? "active-dashboard" : "inactive-dashboard"
                }
              >
                <MdClass /> My Selected Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/enrolledClass"
                className={({ isActive }) =>
                  isActive ? "active-dashboard" : "inactive-dashboard"
                }
              >
                <MdPayments /> My Enrolled Classes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
