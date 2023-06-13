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
    <div className="lg:px-10 pb-20  dark:bg-cyan-900 dark:text-white">
      <h1 className="text-5xl font-bold pt-10 lg:pt-20 pb-4 text-center">
        Our Instructors
      </h1>
      <p className="text-center w-3/5 mx-auto text-lg py-3">Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country</p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10 mt-10 px-5 lg:pb-12">
        {
            instructors && instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
        }
      </div>
    </div>
  );
};

export default Instructors;
