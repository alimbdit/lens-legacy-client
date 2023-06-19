import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Loading from "../../../../components/Loading/Loading";
import SelectedClassRow from "./SelectedClassRow";
// import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import PaymentModal from "../../../../components/Modals/PaymentModal";
import { useState } from "react";


const SelectedClass = () => {
  const { user, loading } = useAuth();
  let [isOpen, setIsOpen] = useState(false)
  const [axiosSecure] = useAxiosSecure();

  const {
    data: selectClass = [],
    isLoading: isSelectLoading,
    refetch,
  } = useQuery({
    queryKey: ["selectClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const result = await axiosSecure.get(`/selectedClass/${user?.email}`);
      return result.data;
    },
  });
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handlePayment = (item) => {
    // console.log(item)
    refetch()

  };

  const handleDelete =  (item) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async(result) => {
        if (result.isConfirmed) {
            await axiosSecure
            .put(`/removeSelect/${user?.email}`, { classId: item._id })
            .then((result) => {
              if(result.data.modifiedCount > 0){
                //   toast.success("Class is Remove from your")
                  Swal.fire(
                    'Deleted!',
                    'Class is Remove from your.',
                    'success'
                  )
                  refetch()
              }
            });
        }
      })
   
  };

  

  

  // console.log(selectClass);

  if (loading || isSelectLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-4 w-full max-w-sm lg:max-w-fit px-5">
      <h1 className="text-5xl font-bold my-4 text-center">
        Booked Classes: {selectClass.length}
      </h1>

      <div className="max-w-sm lg:max-w-fit ">
        <div className="overflow-x-auto h-[450px] lg:h-[510px]">
          <table className="table lg:table-pin-rows">
            <thead>
              <tr className="text-lg">
                <th>#</th>
                <th className="text-center">Class</th>
                <th className="text-center">Instructor</th>
                <th className="text-center">
                  Available <br /> Seat
                </th>
                <th className="text-end">Fees</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {selectClass &&
                selectClass.map((item, index) => (
                  <SelectedClassRow
                    handlePayment={handlePayment}
                    handleDelete={handleDelete}
                    item={item}
                    // openModal={openModal}
                    index={index}
                    key={item._id}
                  ></SelectedClassRow>
                ))}
            </tbody>
          </table>
          {/* <FeedbackModal
            feedbackId={feedbackId}
            openModal={openModal}
            isOpen={isOpen}
            closeModal={closeModal}
            refetch={refetch}
          ></FeedbackModal> */}
          <PaymentModal openModal={openModal} isOpen={isOpen} closeModal={closeModal}></PaymentModal>
        </div>
      </div>
    </div>
  );
};

export default SelectedClass;
