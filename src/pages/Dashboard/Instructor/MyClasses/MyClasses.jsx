import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import ManageClasses from "./../../Admin/ManageClasses/ManageClasses";

const MyClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [classes, setClasses] = useState([]);

  // const {data:classes=[], isLoading:classLoading, refetch} = useQuery({
  //     queryKey: ['classes', user?.email],
  //     enabled:!loading,
  //     queryFn: async() => {
  //         if(!user){
  //             return []
  //         }
  //         const result = await axiosSecure.get(`/myClass?email=${user?.email}`);
  //         return result.data;
  //     }
  // })

  useEffect(() => {
    axiosSecure
      .get(`/myClass?email=${user?.email}`)
      .then((data) => setClasses(data.data));
  }, [axiosSecure, user?.email]);

  const {
    _id,
    className,
    email,
    instructorName,
    price,
    seat,
    status,
    imgUrl,
    enrolledStudent,
  } = classes;

  return (
    <div className="my-4 w-full">
      <h1 className="text-5xl font-bold my-4 text-center">
        My Class: {classes.length}
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class</th>
                <th className="text-center">Fees</th>
                <th>Available Seat</th>
                <th>Enrolled</th>
                <th>Feedback</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classes && classes.map((item, index) => <tr key={item._id}>
                <th>
                  {index + 1 }
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={imgUrl}
                          alt="class image"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item?.className}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td className="text-end">
                  ${item?.price}
                </td>
                <td className="text-center">
                  {item?.seat}
                </td>
                <td className="text-center">{item.enrolledStudent}</td>
                <td></td>
                <th>
                  <button className="btn btn-ghost btn-xs">Update</button>
                </th>
              </tr>)}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
