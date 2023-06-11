import { NavLink, Outlet } from "react-router-dom";
import {
  MdClass,
  MdPayments,
  MdAddToPhotos,
  MdOutlineHotelClass,
  MdManageAccounts,
} from "react-icons/md";
import { FaHome, FaTachometerAlt, FaChalkboardTeacher } from "react-icons/fa";
import { GiWallet, GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
const [isInstructor, isInstructorLoading] = useInstructor();
  console.log(isAdmin, 'admin')
  console.log(isInstructor, 'isInstructor')

  const studentNavOptions = (
    <>
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
      <li>
        <NavLink
          to="/dashboard/paymentHistory"
          className={({ isActive }) =>
            isActive ? "active-dashboard" : "inactive-dashboard"
          }
        >
          <GiWallet /> Payment History
        </NavLink>
      </li>
    </>
  );

  const instructorNavOptions = (
    <>
      {" "}
      <li>
        <NavLink
          to="/dashboard/addClass"
          className={({ isActive }) =>
            isActive ? "active-dashboard" : "inactive-dashboard"
          }
        >
          <MdAddToPhotos className="text-xl"/> Add a Class
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/myClass"
          className={({ isActive }) =>
            isActive ? "active-dashboard" : "inactive-dashboard"
          }
        >
          <SiGoogleclassroom /> My Classes
        </NavLink>
      </li>
    </>
  );

  const adminNavOptions = (
    <>
      {" "}
      <li>
        <NavLink
          to="/dashboard/manageClasses"
          className={({ isActive }) =>
            isActive ? "active-dashboard" : "inactive-dashboard"
          }
        >
          <MdOutlineHotelClass className="text-2xl" /> Manage Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manageUsers"
          className={({ isActive }) =>
            isActive ? "active-dashboard" : "inactive-dashboard"
          }
        >
          <MdManageAccounts className="text-2xl" /> Manage Users
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer lg:drawer-open w-full">
        <input id="dashboard-menu" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          {/* Page content here */}
          <label
            htmlFor="dashboard-menu"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Menu
          </label>
          <Outlet className="w-full"></Outlet>
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
              <h3 className="text-lg">{user?.displayName}</h3>
              <hr className="my-1 w-3/4 mx-auto"/>
              <h3 className="text-lg">{user?.email}</h3>
            </div>
            <div className="divider my-2"></div>
            <li>
              <NavLink
                to="/dashboard/dashboard"
                className={({ isActive }) =>
                  isActive ? "active-dashboard" : "inactive-dashboard"
                }
              >
                <FaTachometerAlt /> {isAdmin? "Admin" : isInstructor ? "Instructor" : "Student"}
              </NavLink>
            </li>

            {
              isAdmin ? adminNavOptions : isInstructor ? instructorNavOptions : studentNavOptions
            }
            

            {/* {studentNavOptions} */}

            {/* {instructorNavOptions} */}

            {/* {adminNavOptions} */}

            <div className="divider my-2"></div>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-dashboard" : "inactive-dashboard"
                }
              >
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructors"
                className={({ isActive }) =>
                  isActive ? "active-dashboard" : "inactive-dashboard"
                }
              >
                <FaChalkboardTeacher /> Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classes"
                className={({ isActive }) =>
                  isActive ? "active-dashboard" : "inactive-dashboard"
                }
              >
                <GiTeacher /> Classes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
