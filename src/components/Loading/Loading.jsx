import Lottie from "lottie-react";
import loadingAni from "../../assets/loading1.json";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-44">
        <Lottie animationData={loadingAni} loop={true} />
      </div>
    </div>
  );
};

export default Loading;
