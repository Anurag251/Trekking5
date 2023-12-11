import Lottie from "lottie-react";
import animationData from "../assets/lottieflow-loading-04-2-0168b7-easey.json";

const LoadingComponent = () => {
  return (
    <div className="page-loading">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: "200px", height: "200px" }}
      />
    </div>
  );
};

export default LoadingComponent;
