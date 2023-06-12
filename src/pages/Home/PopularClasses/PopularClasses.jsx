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

    console.log(popularClass)
    if(isPopularLoading){
        return <Loading></Loading>
    }

  return (
    <div className="lg:px-10 lg:my-20 lg:pb-20">
      <h1 className="text-5xl font-bold my-4 text-center">
        Popular Classes
      </h1>
      <div className="mt-10 px-5  lg:px-10 grid grid-cols-1 gap-5 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {
           popularClass && popularClass.map(singleClass => <PopularClassCard key={singleClass._id} singleClass={singleClass}></PopularClassCard>) 
        }
      </div>

    </div>
  );
};

export default PopularClasses;
