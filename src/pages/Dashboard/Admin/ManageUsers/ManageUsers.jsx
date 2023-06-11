import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import ManageUsersRow from "./ManageUsersRow";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import Loading from "../../../../components/Loading/Loading";

const ManageUsers = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch, isLoading: isUserLoading } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !loading,
    queryFn: async () => {
        if(!user){
            return []
        }
      const result = await axiosSecure.get("/users");
      return result.data;
    },
  });

  const handleRole = async(id, role, name) => {
    // console.log({role})
    await axiosSecure.put(`/user/${id}`, {role})
    .then(data => {
        if(data.data.modifiedCount > 0){
            // toast.success(`${name} is ${role} now!`);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${name} is ${role} now!`,
                showConfirmButton: false,
                timer: 1500
              })
            refetch()
        }
    }).catch(error => console.log(error))
  }

  if(isUserLoading){
    return <Loading></Loading>
  }

  return (
    <div className="my-4 w-full max-w-sm lg:max-w-fit px-5">
      <h1 className="text-5xl font-bold mt-4 text-center">
        Manage Users: {users.length}
      </h1>

      <div className="max-w-sm lg:max-w-fit p-5">
        <div className="overflow-x-auto h-[450px] lg:h-[485px] w-full">
          <table className="table table-pin-rows w-full lg:table-fixed">
            <thead className="">
              <tr className="text-xl ">
                <th className="w-12">#</th>
                <th className="text-center">Image</th>
                <th className="text-center">User</th>
                <th className="text-center">Role</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((item, index) => (
                  <ManageUsersRow  
                    item={item} 
                    index={index}
                    key={item._id}
                    handleRole={handleRole}
                  ></ManageUsersRow>
                ))}
            </tbody>
          </table>
       
        </div>
        
      </div>
    </div>
  );
};

export default ManageUsers;
