import logo from "../../../../public/logo.png";
import {
  FaLocationArrow,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import gallery1 from "../../../assets/images/gallery/gallery1.jpg";
import gallery2 from "../../../assets/images/gallery/gallery2.jpg";
import gallery3 from "../../../assets/images/gallery/gallery3.jpg";
import gallery4 from "../../../assets/images/gallery/gallery4.jpg";
import gallery5 from "../../../assets/images/gallery/gallery5.jpeg";
import gallery6 from "../../../assets/images/gallery/gallery6.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white pt-7 px-7 lg:px-10 lg:pt-10 ">
      <div className="flex flex-col gap-7 lg:flex-row justify-between">
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-3 items-center">
            <Link to='/'><img src={logo} className="w-24" alt="Lens Legacy Logo" /></Link>
            <h2 className="text-5xl font-bold">Lens Legacy</h2>
          </div>
          <div className="flex gap-7 my-5">
            <FaFacebookF className="rounded-lg text-3xl border p-1 cursor-pointer hover:bg-white hover:text-gray-900" />
            <FaTwitter className="rounded-lg text-3xl border p-1 cursor-pointer hover:bg-white hover:text-gray-900" />
            <FaLinkedinIn className="rounded-lg text-3xl border p-1 cursor-pointer hover:bg-white hover:text-gray-900" />
            <FaYoutube className="rounded-lg text-3xl border p-1 cursor-pointer hover:bg-white hover:text-gray-900" />
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold mb-4">Information</h3>
          <div className="text-white flex gap-2 items-center">
            <Link className="hover:underline" to='/instructors'>Instructors</Link>
          </div>
          <div className="text-white flex gap-2 items-center">
          <Link className="hover:underline" to='/classes'>Classes</Link>
          </div>
          <div className="text-white flex gap-2 items-center">
          <Link className="hover:underline" to='/'>About</Link>
          </div>
          <div className="text-white flex gap-2 items-center">
          <Link className="hover:underline" to='/'>Blogs</Link>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <div className="text-white flex gap-2 items-center">
            <FaLocationArrow />
            <p className=""> Sunnyville, CA 98765</p>
          </div>
          <div className="text-white flex gap-2 items-center">
            <FaPhone />
            <p className=""> +1 (555) 123-4567</p>
          </div>
          <div className="text-white flex gap-2 items-center">
            <FaEnvelope />
            <p className="">lens@legacy.com</p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-4">Gallery</h3>
          <div className="text-white grid grid-cols-3 gap-2 items-center">
            <div className="w-20 h-20 cursor-pointer hover:opacity-75">
              <img
                className="object-cover w-20 h-20 rounded-lg"
                src={gallery1}
                alt=""
              />
            </div>
            <div className="w-20 h-20 cursor-pointer hover:opacity-75">
              <img
                className="object-cover w-20 h-20 rounded-lg"
                src={gallery2}
                alt=""
              />
            </div>
            <div className="w-20 h-20 cursor-pointer hover:opacity-75">
              <img
                className="object-cover w-20 h-20 rounded-lg"
                src={gallery3}
                alt=""
              />
            </div>
            <div className="w-20 h-20 cursor-pointer hover:opacity-75">
              <img
                className="object-cover w-20 h-20 rounded-lg"
                src={gallery4}
                alt=""
              />
            </div>
            <div className="w-20 h-20 cursor-pointer hover:opacity-75">
              <img
                className="object-cover w-20 h-20 rounded-lg"
                src={gallery5}
                alt=""
              />
            </div>
            <div className="w-20 h-20 cursor-pointer hover:opacity-75">
              <img
                className="object-cover w-20 h-20 rounded-lg"
                src={gallery6}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <hr className="px-10 my-2" />
      <div className="text-center pb-2">
        <p>
          &copy; {new Date().getFullYear()} Lens Legacy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
