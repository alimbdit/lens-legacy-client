import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import ManageClassRow from "./ManageClassRow";

const ManageClasses = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data:classes=[], refetch} = useQuery({
        queryKey: ['classes', user?.email],
        enabled:!loading,
        queryFn: async() => {
            if(!user){
                return []
            }
            const result = await axiosSecure.get(`/classes`);
            return result.data;
        }
    })

  return (
    <div className="my-4 w-full max-w-sm lg:max-w-fit px-5">
      <h1 className="text-5xl font-bold my-4 text-center">Manage Classes: {classes.length}</h1>

      <div className="max-w-sm lg:max-w-fit ">
        <div className="overflow-x-auto ">
          <table className="table ">

            <thead>
              <tr className="text-lg">
                <th>
                  #
                </th>
                <th className="text-center">Class</th>
                <th className="text-center">Instructor</th>
                <th className="text-center">Available Seat</th>
                <th className="text-end">Fees</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>

              {
                classes && classes.map((item, index) => <ManageClassRow item={item} index={index} key={item._id}></ManageClassRow>)
              }


            </tbody>
  
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
