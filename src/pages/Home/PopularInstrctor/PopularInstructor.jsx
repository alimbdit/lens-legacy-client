import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import InstructorCard from "../../Instructors/InstructorCard";

const PopularInstructor = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: instructors = [], isLoading: isInstructorLoading } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const response = await axiosSecure.get("/popularInstructor");
      return response.data;
    },
  });

  return (
    <div className=" bg-info bg-opacity-5 lg:px-20 lg:pb-20 lg:pt-5 lg:my-20">
      <h1 className="text-5xl font-bold my-4 text-center">
        Popular Instructor
      </h1>
      <div className="">
        <div className="mt-10 px-5 lg:px-10 grid grid-cols-1 gap-5 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 ">
          {instructors &&
            instructors.map((instructor) => (
              <InstructorCard
                key={instructor._id}
                instructor={instructor}
              ></InstructorCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PopularInstructor;
