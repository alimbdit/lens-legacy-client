import { useQuery } from "@tanstack/react-query";

import { useEffect } from "react";
import Aos from "aos";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TutorialCard from "../Home/FreeTutorials/TutorialCard";


const AllFreeTutorials = () => {
    const {user} = useAuth();
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

    return (
        <div className="parent-container bg-info bg-opacity-5">
             <h1 className="text-5xl font-bold my-4 text-center">
        Free Tutorials
      </h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10 mt-10 px-5" >
                {
                    tutorials && tutorials.map(tutorial => <TutorialCard key={tutorial.id} tutorial={tutorial}></TutorialCard>)
                }
            </div>
        </div>
    );
};

export default AllFreeTutorials;