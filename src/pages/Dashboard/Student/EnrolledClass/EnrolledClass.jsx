import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import EnrolledClassRow from "./EnrolledClassRow";
import Loading from "../../../../components/Loading/Loading";

const EnrolledClass = () => {

    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure()

    const {data:enrolledClass=[], isLoading: isEnrolledLoading} = useQuery({
        queryKey:['enrolledClass', user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const result = await axiosSecure.get(`/enrolledClass/${user?.email}`);
            return result.data
        }
    })

    if(isEnrolledLoading){
        return <Loading></Loading>
    }


  return (
    <div className="my-4 w-full max-w-sm lg:max-w-fit px-5">
      <h1 className="text-5xl font-bold my-4 text-center">
        Enrolled Classes: {enrolledClass.length}
      </h1>

      <div className="max-w-sm lg:max-w-fit ">
        <div className="overflow-x-auto h-[450px] lg:h-[510px]">
          <table className="table lg:table-pin-rows lg:table-fixed">
            <thead>
              <tr className="text-xl">
                <th className="w-3">#</th>
                <th className="text-center"></th>
                <th className="text-center">Class Name</th>
                <th className="text-center">Instructor</th>
                <th className="text-end pr-16">Fees</th>
                {/* <th className="text-center">Action</th> */}
              </tr>
            </thead>
            <tbody className="pr-5">
              {enrolledClass &&
                enrolledClass.map((item, index) => (
                  <EnrolledClassRow 
                   
                    item={item}
                    // openModal={openModal}
                    index={index}
                    key={item._id}
                  ></EnrolledClassRow>
                ))}
            </tbody>
          </table>
 
        </div>
      </div>
    </div>
  );
};

export default EnrolledClass;
