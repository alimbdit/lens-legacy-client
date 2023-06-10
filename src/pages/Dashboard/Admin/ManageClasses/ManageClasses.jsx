import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import ManageClassRow from "./ManageClassRow";
import { toast } from "react-hot-toast";
import { useState } from "react";
import FeedbackModal from "../../../../components/Modals/FeedbackModal";
import ManageClassesCard from "./ManageClassesCard";


const ManageClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false)
  const [feedbackId, setFeedbackId]=useState(null)

  
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (!user) {
        return [];
      }
      const result = await axiosSecure.get(`/classes`);
      return result.data;
    },
  });

  // ^ feedback modal function 
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }


  // ^ approve function
  const handleApprove = async (item) => {
    if (item.status === "pending") {
      const status = "approved";
      const res = await axiosSecure.patch(`/updateStatus/${item._id}`, {
        status,
      });
      if (res.data.modifiedCount > 0) {
        toast.success("Class Approved!");
        refetch();
      }
    } else {
      return;
    }
    return;
  };

  // ! denied function
  const handleDeny = async (item) => {
    if (item.status === "pending") {
      const status = "denied";
      const res = await axiosSecure.patch(`/updateStatus/${item._id}`, {
        status,
      });
      if (res.data.modifiedCount > 0) {
        toast.error("Class Denied!");
        refetch();
      }
    } else {
      return;
    }
    return;
  };

  

  return (
    <div className="my-4 w-full max-w-sm lg:max-w-fit px-5">
      <h1 className="text-5xl font-bold my-4 text-center">
        Manage Classes: {classes.length}
      </h1>

      {/* <div className="max-w-sm lg:max-w-fit ">
        <div className="overflow-x-auto h-[450px] lg:h-[510px]">
          <table className="table table-pin-rows">
            <thead>
              <tr className="text-lg">
                <th>#</th>
                <th className="text-center">Class</th>
                <th className="text-center">Instructor</th>
                <th className="text-center">Available Seat</th>
                <th className="text-end">Fees</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {classes &&
                classes.map((item, index) => (
                  <ManageClassRow
                    handleApprove={handleApprove}
                    handleDeny={handleDeny}
                    item={item}
                    openModal={openModal}
                    index={index}
                    setFeedbackId={setFeedbackId}
                    key={item._id}
                  ></ManageClassRow>
                ))}
            </tbody>
          </table>
        <FeedbackModal feedbackId={feedbackId} openModal={openModal} isOpen={isOpen} closeModal={closeModal} refetch={refetch}></FeedbackModal>
        </div>
        
      </div> */}
      <div className="w-full flex flex-col gap-5 mt-5">
      {
          classes?.map(item => <ManageClassesCard handleApprove={handleApprove}
            handleDeny={handleDeny} openModal={openModal} setFeedbackId={setFeedbackId} key={item._id} item={item}></ManageClassesCard>)
        }
         <FeedbackModal feedbackId={feedbackId}  openModal={openModal} isOpen={isOpen} closeModal={closeModal} refetch={refetch}></FeedbackModal>
      </div>
    </div>
  );
};

export default ManageClasses;
