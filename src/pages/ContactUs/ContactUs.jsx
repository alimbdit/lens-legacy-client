import { FaLocationArrow, FaPhone, FaEnvelope } from "react-icons/fa";
import { useForm } from "react-hook-form";
import "./ContactUs.css";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className=" contact-bg ">
      <div className="lg:px-20  lg:pt-20 pt-5 lg:pb-28 dark:text-white  bg-gray-900 bg-opacity-80 dark:bg-opacity-90 dark:bg-gray-950 text-white px-5">
        <div>
          <h1 className="text-5xl font-bold my-4 text-center">Contact Us</h1>
          <p className="lg:w-1/2 px-5 mx-auto mt-10 mb-7 font-light text-lg text-center">
            We&apos;d love to hear from you! Whether you have a question,
            feedback, or just want to say hello, we&apos;re here to assist you.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-28 w-full justify-center items-center mt-10 lg:mt-14">
          <div className=" flex justify-center">
            <div className="space-y-10 ">
              <div className="flex gap-4">
                <div className="bg-white w-10 h-10 rounded-full p-3 flex justify-center items-center">
                  <FaLocationArrow className=" text-gray-900  text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-info text-lg">Address</h3>
                  <p className="">Sunnyville, CA 98765, USA</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white w-10 h-10 rounded-full p-3 flex justify-center items-center">
                  <FaPhone className=" text-gray-900  text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-info text-lg">Phone</h3>
                  <p className="">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white w-10 h-10 rounded-full p-3 flex justify-center items-center">
                  <FaEnvelope className=" text-gray-900  text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-info text-lg">Email</h3>
                  <p className="">lens@legacy.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" bg-white p-10 w-full mb-10 lg:mb-0">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="py-5 space-y-3 w-full flex flex-col"
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input contact-input w-full max-w-xs"
                  {...register("fullName", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.fullName && <span>This field is required</span>}
                <input
                  type="email"
                  placeholder="Email"
                  className="input contact-input w-full max-w-xs"
                  {...register("email", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.email && <span>This field is required</span>}

                <textarea
                  type="text"
                  className="textarea contact-input lg:w-[277px] w-full max-w-xs"
                  placeholder="Message"
                  {...register("message")}
                ></textarea>
                {/* errors will return when field validation fails  */}

               <div className="pt-3">
               <input
                  type="submit"
                  value="Send"
                  className="lg:w-[277px] w-full  max-w-xs btn btn-info border-2 text-lg hover:border-2 hover:border-info hover:bg-transparent hover:text-info font-bold text-white "
                />
               </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
