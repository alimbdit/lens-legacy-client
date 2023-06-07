import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import {FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import regAni from "../../../public/reg.json";

const Login = () => {
  const [show, setShow] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-2/5 lg:pl-16">
            <Lottie animationData={regAni} loop={true} />
          </div>

          <div className="card max-w-sm w-full shadow-2xl bg-base-100 p-7">
            <h1 className="text-4xl font-bold text-center mb-5">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="form-control mb-5">
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered focus:outline-offset-0"
                  {...register("email", { required: true })}
                />
                {/* errors will return when field validation fails  */}
                {errors.email && (
                  <span className="text-error text-sm mt-1">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    className="input focus:outline-offset-0 input-bordered w-full"
                    {...register("password", {
                      required: true,
                    //   pattern: /^(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}$/,
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
                {/* {errors.password?.type === "pattern" && (
                  <span className="text-error text-sm mt-1">
                    Password should contain at least one uppercase, one special
                    character and length at least 6 character.
                  </span>
                )} */}
                {errors.password?.type === "required" && (
                  <span className="text-error text-sm mt-1">Password is required </span>
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
                  value="Login"
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

export default Login;
