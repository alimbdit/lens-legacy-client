import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading/Loading";
import ClassCard from "./ClassCard";

const Classes = () => {
  // const {user, loading} = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: allClass = [], refetch, isLoading } = useQuery({
    queryKey: ["allClass"],
    queryFn: async () => {
      const response = await axiosSecure.get("approvedClasses");
      return response.data;
    },
  });

  if(isLoading){
    return <Loading></Loading>
  }

  return (
    <div className="lg:px-10">
      <h1 className="text-5xl font-bold my-4 text-center">
      {allClass.length} Classes 
      </h1>

      <div className="px-5 grid grid-cols-1 lg:grid-cols-2 gap-5  mt-10">
        {
            allClass && allClass.map(item => <ClassCard item={item} key={item._id}></ClassCard>)
        }
      </div>
    </div>
  );
};

export default Classes;
