import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";
import { BiEdit } from 'react-icons/bi';

import UpdateClassModal from "../../../../components/Modals/UpdateClassModal";

const MyClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  const [updateItem, setUpdateItem] = useState({});

  const {data:classes=[], refetch} = useQuery({
      queryKey: ['classes', user?.email],
      enabled:!loading,
      queryFn: async() => {
          if(!user){
              return []
          }
          const result = await axiosSecure.get(`/myClass?email=${user?.email}`);
          return result.data;
      }
  })

  

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }



  return (
    <div className="my-4 w-full max-w-sm lg:max-w-fit px-5">
      <h1 className="text-5xl font-bold my-4 text-center">
        My Classes: {classes.length}
      </h1>
      <div className="max-w-sm lg:max-w-fit">
        <div className="overflow-x-auto ">
          <table className="table">
 
            <thead>
              <tr className="text-lg">
                <th>#</th>
                <th></th>
                <th className="text-center">Class Name</th>
                <th className="text-center">Status</th>
                <th className="text-end">Fees</th>
                <th className="text-center">Available <br/> Seat</th>
                <th className="text-center">Enrolled <br/> Students</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classes &&
                classes.map((item, index) => (
                  <tr key={item._id} className="text-base">
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="rounded-lg w-16 h-12">
                            <img src={item?.imgUrl} alt="class image" />
                          </div>
                        </div>
                      </div>
                    </td>
                    
                    <td className="text-center">
                      <div>
                        <div className="font-bold capitalize">{item?.clsName}</div>
                      </div>
                    </td>
                    <td className="text-center">
                      <div>
                        <div className="font-bold capitalize">{item?.status}</div>
                      </div>
                    </td>
                    <td className="text-end">${item?.price}</td>
                    <td className="text-center">{item?.seat}</td>
                    <td className="text-center">{item.enrolledStudent}</td>
                    <td>
                      <p className="w-30 whitespace-pre-line">
                        {item?.feedback?.split(" ").length > 20
                          ? item?.feedback?.split(" ").slice(0, 20).join(" ") +
                            "..."
                          : item?.feedback}{" "}
                      </p>
                    </td>
                    <th>
                      <button onClick={() => {
                        openModal();
                        setUpdateItem(item);
                        
                      }}  className="bg-info hover:bg-opacity-75 p-2 rounded-lg  "><BiEdit className="text-3xl text-white"/></button>
                     
                    </th>
                    
                  </tr>
                  
                 
                ))}
            </tbody>
          </table>
          <UpdateClassModal isOpen={isOpen} updateItem={updateItem} closeModal={closeModal} refetch={refetch}></UpdateClassModal>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
