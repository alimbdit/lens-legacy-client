import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

const InstructorCard = ({ instructor }) => {
  const { name, email, photo } = instructor;

  return (
    <>
      <div className="card w-full bg-orange-500 bg-opacity-20 rounded-lg shadow-xl">
        <div className="relative">
          <figure className=" object-cover relative h-72">
            <img
              src={photo}
              alt="instructor image"
              className="w-full rounded-t-lg h-72   object-cover"
            />
          </figure>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="text-lg pb-1">{email}</p>
          <div className="card-actions ">
            <div className="flex gap-3">
              {/* <Link to='https://www.facebook.com/'><FaFacebookF className="text-3xl text-info dark:text-white 
              p-1 border-2 border-info dark:border-white rounded-full 
              hover:scale-105 cursor-pointer"/></Link> */}
              <Link to='https://www.facebook.com'><FaFacebookF className="text-lg text-gray-400 hover:text-info text-opacity-80 dark:text-opacity-60 dark:text-white hover:scale-105 cursor-pointer"/></Link>
              <Link to='https://www.tweeter.com'><FaTwitter className="text-lg text-gray-400 hover:text-info text-opacity-80 dark:text-opacity-60 dark:text-white hover:scale-105 cursor-pointer"/></Link>
              <Link to='https://www.linkedin.com'><FaLinkedinIn className="text-lg text-gray-400 hover:text-info text-opacity-80 dark:text-opacity-60 dark:text-white hover:scale-105 cursor-pointer"/></Link>
              <Link to='https://www.pinterest.com/'><FaPinterestP className="text-lg text-gray-400 hover:text-info text-opacity-80 dark:text-opacity-60  dark:text-white hover:scale-105 cursor-pointer"/></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
