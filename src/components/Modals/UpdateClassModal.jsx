import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const sweetAlert = {
  position: "center",
  icon: "success",
  title: "Class update successful!",
  showConfirmButton: false,
  timer: 1500,
};

const UpdateClassModal = ({ isOpen, closeModal, updateItem, refetch }) => {

  const [axiosSecure] = useAxiosSecure();

  console.log(updateItem);
  const hosting_imag_url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
  }`;

  const { _id, price, seat, clsName, imgUrl } = updateItem;
  //   console.log(price, className)

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const clsName = form.newClassName.value;
    const price = form.newPrice.value;
    const seat = form.newSeat.value;
    const image = form.image.files;
    console.log(image.length);

    const formData = new FormData();
    formData.append("image", image[0]);

    if (image.length > 0) {
      fetch(hosting_imag_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.success) {
            const imgUrl = result.data.display_url;
            const newClass = {
              clsName,
              price: parseFloat(price),
              seat: parseInt(seat),
              imgUrl,
            };

            axiosSecure.put(`/updateClass/${_id}`, newClass).then((data) => {
              console.log(data);
              if (data.data.modifiedCount > 0) {
                Swal.fire(sweetAlert);
                refetch();
                closeModal();
              }
            });
          }
        });
    } else {
      const newClass = {
        clsName,
        price: parseFloat(price),
        seat: parseInt(seat),
        imgUrl,
      };
      axiosSecure.put(`/updateClass/${_id}`, newClass).then((data) => {
        console.log(data);
        if (data.data.modifiedCount > 0) {
          Swal.fire(sweetAlert);
          refetch();
          closeModal();
        }
      });
    }
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
                <Dialog.Panel className="relative w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="bg-base-200 p-5 lg:p-10 rounded">
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold text-center  leading-6 text-gray-900 mb-4"
                    >
                      Update
                    </Dialog.Title>
                    <form onSubmit={handleUpdate}>
                      <div className="flex lg:gap-5 flex-col lg:flex-row">
                        <div className="">
                          <label className="label">
                            <span className="">Class Name</span>
                          </label>

                          <input
                            type="text"
                            defaultValue={clsName}
                            placeholder="Class Name"
                            className="input w-full lg:w-[300px]  input-bordered focus:border-transparent"
                            name="newClassName"
                          />
                        </div>
                        <div className="">
                          <label className="label">
                            <span className="">Available Seat</span>
                          </label>
                          <input
                            type="number"
                            defaultValue={seat}
                            name="newSeat"
                            placeholder="Available Seat"
                            className="input w-full lg:w-[300px] input-bordered focus:border-transparent "
                          />
                        </div>
                      </div>
                      <div className="flex lg:gap-5 flex-col lg:flex-row">
                        <div className="">
                          <label className="label">
                            <span className="">Fees</span>
                          </label>
                          <input
                            type="text"
                            name="newPrice"
                            defaultValue={price}
                            placeholder="$"
                            className="input w-full lg:w-[300px] input-bordered focus:border-transparent"
                          />
                        </div>
                        <div className="">
                          <label className="label">
                            <span className="">Class Image</span>
                          </label>
                          <input
                            type="file"
                            name="image"
                            className="file-input file-input-bordered w-full lg:w-[300px] focus:border-transparent "
                          />
                        </div>
                      </div>

                      <div className="form-control mt-6">
                        <input
                          className="btn btn-primary"
                          type="submit"
                          value="UPDATE"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="mt-4 fixed top-0 right-4">
                    <button className="btn btn-circle btn-sm bg-red-500 hover:bg-red-600" onClick={closeModal}>
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

export default UpdateClassModal;
