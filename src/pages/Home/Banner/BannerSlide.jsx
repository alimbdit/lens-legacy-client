
import { motion } from 'framer-motion';

const BannerSlide = ({slide}) => {
    return (
        <div className="carousel-item relative w-full overflow-hidden">
        {/* h-[calc(100vh-88px)] bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]*/}
        <img src={slide} className="w-full h-screen lg:h-[calc(100vh-88px)]  object-cover" />
        <div className="absolute flex items-center bg-black bg-opacity-60 h-full w-full">
          <div className="flex justify-center">
            <div className="w-1/2 text-center text-white space-y-10">
              <h1 className="text-4xl lg:text-7xl font-bold ">Make your Moment</h1>
              <p>
                Discover the magic of photography in our captivating class.
                Unleash your creativity, capture breathtaking moments, and
                share your unique perspective with the world. Join us and
                embark on a journey of self-expression,
                growth, and endless possibilities.
              </p>
              <div className="flex flex-col lg:flex-row gap-3 justify-center">
                <motion.button whileHover={{ scale:  1.05 }} whileTap={{ scale:  0.95 }} className="btn  btn-info font-bold text-white ">
                  Discover More
                </motion.button>
                <motion.button whileHover={{ scale:  1.05 }} whileTap={{ scale:  0.95 }} className="btn btn-outline btn-info font-bold border-2">
                  Latest Project
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BannerSlide;