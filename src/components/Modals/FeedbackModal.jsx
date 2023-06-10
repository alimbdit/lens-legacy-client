import { Dialog, Transition } from "@headlessui/react";
import { Fragment} from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import { toast } from "react-hot-toast";

const FeedbackModal = ({ openModal, isOpen, closeModal, feedbackId, refetch }) => {
  console.log(feedbackId, "modal");
  const [axiosSecure] = useAxiosSecure();

  const handleFeedback = async (event) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    await axiosSecure.put(`/feedback/${feedbackId}`, { feedback })
    .then(data => {
        
        console.log(data.data)
        if(data.data.modifiedCount > 0){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Feedback Added successful!',
                showConfirmButton: false,
                timer: 1500
              })
              refetch()
            //   toast.success("Feedback Added!");
        }

        })
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-semibold leading-6 text-center text-gray-900"
                  >
                    Give Feedback
                  </Dialog.Title>
                  <div className="mt-2 relative">
                    <form onSubmit={handleFeedback}>
                      <textarea
                        name="feedback"
                        className="textarea textarea-bordered focus:border-transparent w-full h-36"
                        placeholder="Feedback"
                      ></textarea>
                       <div className="mt-4 flex justify-center">
                      <input
                        type="submit"
                        value="SEND"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
                        onClick={closeModal}
                      />
                    </div>
                    </form>
                  </div>
                  <div className="mt-4 fixed top-0 right-4">
                    <button className="btn btn-circle  btn-sm bg-red-500 hover:bg-red-600" onClick={closeModal}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="#FFFFFF"
                        viewBox="0 0 24 24"
                        stroke="#FFFFFF"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FeedbackModal;
