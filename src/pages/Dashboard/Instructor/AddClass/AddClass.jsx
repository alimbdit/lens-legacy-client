import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AddClass = () => {

    const {user} = useAuth();
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();

    const hosting_imag_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_UPLOAD_TOKEN}`

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(hosting_imag_url, {
        method: "POST",
        body: formData,
    })
    .then(res => res.json())
    .then(result  => {
        console.log(result)
        if(result.success){
            const imgUrl = result.data.display_url;
            // console.log(imgUrl)
            const {clsName, email, instructor, price, seat, status
            } = data;
            const newClass = {clsName, email, instructor, price: parseFloat(price), seat: parseInt(seat), status, imgUrl, enrolledStudent: 0}
            // console.log(newClass)
            // fetch(`${import.meta.env.VITE_BASE_URL}/newClass`, {
            //     method: "POST",
            //     headers: {
            //         'content-type':"application/json"
            //     },
            //     body: JSON.stringify(newClass)
            // })
            axiosSecure.post(`/newClass`, newClass)
            // .then(res=>res.json())
            .then(data => {
              if(data.data.insertedId){
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Class added successful!',
                  showConfirmButton: false,
                  timer: 1500
                })
                reset();
                navigate('/dashboard/myClass')
              }
            })
        }
    })

  };

  return (
    <div className="my-4">
      <h1 className="text-5xl font-bold my-4 text-center">Add Class</h1>
      <div className="bg-base-200 p-10 rounded">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex lg:gap-5 flex-col lg:flex-row">
          <div className="">
            <label className="label">
              <span className="">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              className="input w-[300px]  input-bordered focus:border-transparent"
              {...register("clsName", { required: true })}
            />
            <br />

            {/* errors will return when field validation fails  */}
            {errors.clsName && <span className="text-red-500">Class Name is required</span>}
          </div>
          <div className="">
            <label className="label">
              <span className="">Instructor Name</span>
            </label>
            <input
            value={user?.displayName}
              type="text"
              placeholder="Instructor Name"
              className="input w-[300px] input-bordered focus:border-transparent "
              {...register("instructor", { required: true })}
            />
            <br />

            {/* errors will return when field validation fails  */}
            {errors.instructor && <span className="text-red-500">Instructor Name is required</span>}
          </div>
          </div>
          <div className="flex lg:gap-5 flex-col lg:flex-row">
          <div className="">
            <label className="label">
              <span className="">Email</span>
            </label>
            <input
              type="email"
              value={user?.email}
              placeholder="Email"
              className="input w-[300px] input-bordered focus:border-transparent "
              {...register("email", { required: true })}
            />
            <br />

            {/* errors will return when field validation fails  */}
            {errors.email && <span className="text-red-500">Email is required</span>}
          </div>
          <div className="">
            <label className="label">
              <span className="">Available Seat</span>
            </label>
            <input
            
              type="number"
              placeholder="Available Seat"
              className="input w-[300px] input-bordered focus:border-transparent "
              {...register("seat", { required: true })}
            />
            <br />

            {/* errors will return when field validation fails  */}
            {errors.seat && <span className="text-red-500">Available Seat is required</span>}
          </div>
          </div>
          <div className="flex lg:gap-5 flex-col lg:flex-row">
          <div className="">
            <label className="label">
              <span className="">Fees</span>
            </label>
            <input
              type="text"
              
              placeholder="$"
              className="input w-[300px] input-bordered focus:border-transparent"
              {...register("price", { required: true })}
            />
            <br />

            {/* errors will return when field validation fails  */}
            {errors.price && <span className="text-red-500">Price is required</span>}
          </div>
          <div className="">
            <label className="label">
              <span className="">Class Image</span>
            </label>
            <input type="file" className="file-input file-input-bordered w-[300px] focus:border-transparent " {...register("image", { required: true })} />
            <br />

            {/* errors will return when field validation fails  */}
            {errors.image && <span className="text-red-500">Image is required</span>}
          </div>
          </div>
          <input type="text" value='pending' className=" hidden" {...register("status")} />
        
          
          <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="ADD"
                />
              </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
