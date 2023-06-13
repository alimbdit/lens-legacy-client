import { useState } from "react";
import { motion } from "framer-motion";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;


const PopularClassCard = ({ singleClass }) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const { clsName, imgUrl, price, enrolledStudent, instructor, email } =
    singleClass;
  return (
    <motion.div initial={false}
    animate={
      isLoaded && isInView
        ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
        : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
    }
    transition={{ duration: 1, delay: 1 }}
    viewport={{ once: true }}
    onViewportEnter={() => setIsInView(true)} className="relative transition duration-200 transform overflow-hidden rounded group shadow-lg hover:shadow-2xl cursor-pointer">
      <img onLoad={() => setIsLoaded(true)}
        className="object-cover w-full group-hover:scale-105 h-56 md:h-64 xl:h-80 "
        src={imgUrl}
        alt="class image"
      />
      <div className="absolute  bg-black text-white inset-0 bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-200 flex justify-center items-center">
        <div className="">
          <h1 className="text-[26px] font-bold mb-6 capitalize">{clsName}</h1>
          <h3 className="text-lg font-medium capitalize">Instructor : {instructor}</h3>
          <h3 className="text-lg font-medium">Contact : {email}</h3>
          <h3 className="text-lg font-medium">Students : {enrolledStudent}</h3>
          <h3 className="text-lg font-medium">Fees : ${price}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default PopularClassCard;
