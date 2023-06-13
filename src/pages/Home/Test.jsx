// import { motion } from "framer-motion";

import useAuth from "../../hooks/useAuth";

const Test = () => {
    const {logOut} = useAuth()
    return (
        <div>
            {/* <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="btn btn-info">Motion</motion.button> */}
            <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
                <button onClick={logOut} className="font-semibold ">Logout</button>
              </li>
      </ul>
    </div>
        </div>
    );
};

export default Test;