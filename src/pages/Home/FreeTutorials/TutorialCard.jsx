import Aos from "aos";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const TutorialCard = ({tutorial}) => {
    const {id, tutorialName, thumbnail, videoUrl, creator, publishDate} = tutorial;
    const navigate = useNavigate();
    useEffect(() => {
        Aos.init({duration: 1000});
      }, [])
  return (
    <div data-aos="fade-left" data-aos-easing="ease-in-sine" className=" ">
      <div className="card w-full bg-gray-900 shadow-xl hover:scale-1 hover:shadow-slate-500 duration-150 rounded-none hover:-translate-y-1 ">
        <figure>
          <img
            src={thumbnail}
            alt="tutorial"
          />
        </figure>
        <div className="px-3 py-3 space-y-3 ">
          <h2 className="text-lg font-semibold text-gray-300">{tutorialName}</h2>
          <div className="flex justify-between text-gray-400">
          <p className="">{creator}</p>
          <p className=""> {publishDate}</p>
          </div>
          <div className="card-actions justify-end">
            <motion.button onClick={() => navigate('/player', {state: videoUrl})} whileHover={{ scale:  1.05 }} whileTap={{ scale:  0.95 }} className="btn btn-sm dark:border-white dark:text-white hover:bg-info hover:border-info border-2 border-info rounded-md bg-transparent text-info  hover:text-white text-base">Play</motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;
