import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import errorAni from "../../public/error1.json";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="h-full my-auto ">
      <div className="h-full  flex flex-col justify-center items-center">
        <div className="w-3/4 lg:w-3/6 mt-28 lg:mt-16">
          <Lottie animationData={errorAni} loop={true} />
        </div>
        <div className=" text-center">
          <h2 className="mb-5 -mt-5 font-extrabold text-8xl text-secondary">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold duration-300 rounded-full hover:bg-opacity-90 bg-info text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
