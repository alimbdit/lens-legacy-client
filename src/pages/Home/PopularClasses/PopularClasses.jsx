import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './../../../hooks/useAxiosSecure';
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../components/Loading/Loading";
import PopularClassCard from "./PopularClassCard";


const PopularClasses = () => {

const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure();

    const {data: popularClass =[], isLoading: isPopularLoading} = useQuery({
        queryKey: ["popularClass",],
        queryFn: async()=>{
            const result = await axiosSecure.get('/popularClass')
            return result.data
        }
    })

    // console.log(popularClass)
    if(isPopularLoading){
        return <Loading></Loading>
    }

  return (
    <div className="lg:px-10 lg:mt-32 mb-16 mt-16 lg:mb-20 lg:pb-10 dark:text-white">
      <h1 className="text-5xl font-bold my-4 text-center">
        Popular Classes
      </h1>
      <p className="text-center w-3/5 mx-auto text-lg py-3">Popular photography classes cover essential techniques, genres, and encourage creativity among students.</p>
      <div className="mt-10 px-5  lg:px-10 grid grid-cols-1 gap-5 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {
           popularClass && popularClass.map(singleClass => <PopularClassCard key={singleClass._id} singleClass={singleClass}></PopularClassCard>) 
        }
      </div>

    </div>
  );
};

export default PopularClasses;
