import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import {FcGoogle } from "react-icons/fc";

import regAni from "../../../public/reg.json";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const [registrationError, setRegistrationError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200 py-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-2/5 lg:pl-16">
            <Lottie animationData={regAni} loop={true} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-7">
            <h1 className="text-4xl font-bold text-center mb-5">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="form-control mb-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered focus:outline-offset-0"
                  {...register("name", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.name && (
                  <span className="text-error text-sm mt-1">Name is required</span>
                )}
              </div>
              <div className="form-control mb-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered focus:outline-offset-0"
                  {...register("email", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.email && (
                  <span className="text-error text-sm mt-1">Email is required</span>
                )}
              </div>
              <div className="form-control mb-5">
                <input
                  type="url"
                  placeholder="PhotoURL"
                  className="input input-bordered focus:outline-offset-0"
                  {...register("photo", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.photo && (
                  <span className="text-error text-sm mt-1">PhotoURL is required</span>
                )}
              </div>
              <div className="form-control mb-5">
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    className="input focus:outline-offset-0 input-bordered w-full"
                    {...register("password", {
                      required: true,
                      pattern: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/,
                    })}
                  />
                  {show ? (
                    <AiOutlineEye
                      onClick={() => setShow(!show)}
                      className="h-6 w-6  cursor-pointer absolute text-gray-800 top-[13px] right-3"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      onClick={() => setShow(!show)}
                      className="h-6 w-6  cursor-pointer absolute text-gray-800 top-[13px] right-3"
                    />
                  )}
                </div>
                {/* {registrationError && (
                  <span className="text-error text-sm mt-1">
                    {registrationError}
                  </span> */}
                {errors.password?.type === "pattern" && (
                  <span className="text-error text-sm mt-1">
                    Password should contain at least one uppercase, one special
                    character and length at least 6 character.
                  </span>
                )}
                {errors.password?.type === "required" && (
                  <span className="text-error text-sm mt-1">Password is required </span>
                )}
              </div>
              <div className="form-control mb-5">
                <div className="relative">
                  <input
                    type={confirmShow ? "text" : "password"}
                    placeholder="Confirm Password"
                    className="input focus:outline-offset-0 input-bordered w-full"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                  />
                  {confirmShow ? (
                    <AiOutlineEye
                      onClick={() => setConfirmShow(!confirmShow)}
                      className="h-6 w-6  cursor-pointer absolute text-gray-800 top-[13px] right-3"
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      onClick={() => setConfirmShow(!confirmShow)}
                      className="h-6 w-6  cursor-pointer absolute text-gray-800 top-[13px] right-3"
                    />
                  )}
                </div>
                {errors.confirmPassword && (
                  <span className="text-error text-sm mt-1">
                    {errors.confirmPassword?.message}
                  </span>
                )}

                {errors.confirmPassword?.type === "required" && (
                  <span className="text-error text-sm mt-1">
                    Confirm Password is required{" "}
                  </span>
                )}
                <label className="label">
                  <Link to="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up "
                />
              </div>
            </form>

            {/* social login */}
            <div className="divider">OR</div>
            <div className="flex justify-center">
                <span className="border-2 rounded-full bg-primary bg-opacity-30 p-[2px] hover:bg-opacity-50"><FcGoogle className="text-4xl cursor-pointer"/></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
