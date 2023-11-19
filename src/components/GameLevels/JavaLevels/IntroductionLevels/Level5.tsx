// Level5.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCode } from "@fortawesome/free-solid-svg-icons"; // Import Java-related icons


import QuizComponent from "@/components/Quiz/Quiz";
import Continue from "@/components/Buttons/Continue";
import Previous from "@/components/Buttons/Previous";


interface Level5Props {
  onComplete: () => void;
  onPrevious: () => void;
}

const Level5: React.FC<Level5Props> = ({ onComplete, onPrevious }) => {
  const handleComplete = () => {
    console.log("Level 1 completed!");
    onComplete();
  };

  const handlePrevious = () => {
    onPrevious();
  };
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div>
      <div
        className="play-ground bg-gradient-to-r from-orange-500/80 to-red-700/80 backdrop-blur-md h-[700px] md:h-[700px] relative overflow-hidden m-2 md:w-[1000px] m-auto md:mt-10 sm:text-xs sm:mt-80 "
        
      >
        {/* Adding Java-related icons to the background */}
        <FontAwesomeIcon
          icon={faCoffee}
          className="text-black absolute top-1/4 left-1/4 text-6xl opacity-30 blur-sm"
        />
        <FontAwesomeIcon
          icon={faCode}
          className="text-black absolute bottom-1/4 right-1/4 text-sm opacity-10 blur-sm"
        />
        <div className="header text-white mt-3 ml-3 md:mt-9 md:ml-16">
          <h2 className="font-bold mb-4 text-2xl md:text-4xl underline">Challenge 2</h2>
        </div>
        <div className=" md:ml-72 md:mt-7">
          <QuizComponent currentQuestion={1} />
        </div>
        <Continue onComplete={handleComplete}/>
      <Previous onPrevious={handlePrevious}/>
      </div>

      {/* "Complete Level 1" button at the bottom right corner */}
      
      {/* Your level-specific content */}
    </div>
  );
};

export default Level5;
