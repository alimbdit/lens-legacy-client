import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import useInstructor from "../../../hooks/useInstructor";
import { motion } from 'framer-motion';

const DashboardHome = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <>
      <div className="hero min-h-screen w-full bg-base-100">
        <div className="hero-content text-center">
          <div className="w-full">
            <h1 className="text-5xl font-bold capitalize">Hello!  {user.displayName}</h1>
            <p className="py-6 text-4xl capitalize">
              You are a {isAdmin ? "Admin" : isInstructor ? "Instructor" : "Student"} In our Site.
            </p>
            <motion.button whileHover={{ scale:  1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-primary text-white">Get Started</motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
