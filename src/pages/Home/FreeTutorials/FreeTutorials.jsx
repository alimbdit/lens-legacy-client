import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import { useEffect } from "react";
import Aos from "aos";
import { motion } from 'framer-motion';
import {FaArrowRight} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import TutorialCard from "../../../components/TutorialCard/TutorialCard";
import Loading from "../../../components/Loading/Loading";


const FreeTutorials = () => {

    const navigate = useNavigate()
    // const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure()

    const {data:tutorials=[], isLoading: isTutorialLoading} = useQuery({
        queryKey: ['tutorials'],
        queryFn: async() => {
            const result = await axiosSecure.get('/tutorials');
            return  result.data
        }
    })

    console.log(tutorials)
    useEffect(() => {
        Aos.init({duration: 1000});
      }, [])

      if(isTutorialLoading){
        return <Loading></Loading>
      }

    return (
        <div className="lg:px-20 lg:pt-20 pt-5 mt-16 lg:pb-28 lg:mt-20 dark:text-white bg-info bg-opacity-5">
             <h1 className="text-5xl font-bold my-4 text-center">
        Free Tutorials
      </h1>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mt-10 px-5" >
                {
                    tutorials && tutorials.map(tutorial => <TutorialCard key={tutorial.id} tutorial={tutorial}></TutorialCard>).slice(0,4)
                }
            </div>
            <div className="pb-10 lg:pb-1  mt-7 flex justify-center items-center">
            <motion.button onClick={() => navigate('/tutorials')} whileHover={{ scale:  1.05 }} whileTap={{ scale:  0.95 }} className="btn  btn-info font-bold text-white dark:bg-transparent dark:border-2 dark:border-white">
                  More <FaArrowRight/>
                </motion.button>
            </div>
        </div>
    );
};

export default FreeTutorials;