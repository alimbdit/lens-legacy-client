import "./Quote.css";
import { useForm } from "react-hook-form";
import img from "../../../assets/images/Quote.jpg";
import img1 from "../../../assets/images/Quote1.jpg";
import img2 from "../../../assets/images/Quote2.jpg";

const Quote = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className=" lg:px-20 lg:pb-20 lg:pt-5 my-16 lg:my-20">
      <div className="quote-bg bg-fixed  w-full rounded">
        <div className="bg-stone-950 bg-opacity-60 p-20 w-full  flex flex-col lg:flex-row items-center">
          <div className="w-full flex justify-center">
            <img className="w-3/4 lg:w-1/2 object-cover rounded shadow-lg" src={img2} alt="" />
          </div>
          <div className="w-full flex items-center ">
            <div className="w-full  text-white ml-auto">
              <h1 className="text-5xl font-bold my-4">Request A Quote</h1>
              <p className="py-2">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="py-5 space-y-3 w-full"
              >
                <div className="flex flex-col lg:flex-row w-full gap-5">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input quote-input w-full max-w-xs"
                    {...register("firstName", { required: true })}
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input quote-input w-full max-w-xs"
                    {...register("lastName")}
                  />
                </div>
                <div className="flex flex-col lg:flex-row gap-5">
                  <input
                    type="text"
                    placeholder="Course Name"
                    className="input quote-input w-full max-w-xs"
                    {...register("courseName", { required: true })}
                  />
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <input
                    type="text"
                    placeholder="Phone"
                    className="input quote-input w-full max-w-xs"
                    {...register("phone", { required: true })}
                  />
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                </div>
                <div className="flex flex-col lg:flex-row gap-5 w-full justify-between items-center">
                  <textarea
                    type="text"
                    className="textarea quote-input lg:w-[277px] w-full max-w-xs"
                    placeholder="Message"
                    {...register("message")}
                  ></textarea>
                  {/* errors will return when field validation fails  */}
                  <input
                    type="submit"
                    value="Request A Quote"
                    className="lg:w-[277px] w-full  max-w-xs btn btn-info border-2 text-lg hover:border-2 hover:border-info hover:bg-transparent hover:text-info font-bold text-white lg:ml-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
