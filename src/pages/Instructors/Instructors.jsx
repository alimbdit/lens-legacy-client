import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import InstructorCard from "./InstructorCard";
import Loading from "../../components/Loading/Loading";

const Instructors = () => {
  // const [instructors, setInstructors] = useState([]);

  const [axiosSecure] = useAxiosSecure();

  const { data: instructors = [], isLoading } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const response = await axiosSecure.get("/instructors");
      return response.data;
    },
  });

  if(isLoading){
    return <Loading></Loading>
  }

  // useEffect(() => {
  //     axiosSecure.get('/instructors')
  //     .then(data => setInstructors(data.data))
  // }, [axiosSecure])

  return (
    <div className="lg:px-10">
      <h1 className="text-5xl font-bold my-4 text-center">
        Our Instructors
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10 mt-10 px-5">
        {
            instructors && instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
        }
      </div>
    </div>
  );
};

export default Instructors;
