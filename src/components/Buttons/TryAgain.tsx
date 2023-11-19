import * as React from "react";

interface ITryAgainProps {}

const TryAgain: React.FunctionComponent<ITryAgainProps> = (props) => {
  const handleTryAgain = () => {
    window.location.reload();
  };
  return (
    <button
      onClick={handleTryAgain}
      className=" bg-red-700 text-white px-2 py-2 rounded-3xl absolute bottom-20 md:bottom-32 left-44 md:left-[450px]"
    >
      Try Again
    </button>
  );
};

export default TryAgain;
