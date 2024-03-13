// Level1.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCode } from "@fortawesome/free-solid-svg-icons"; // Import Java-related icons
import Continue from "@/components/Buttons/Continue";

interface Level1Props {
  onComplete: () => void;
}

const Level1: React.FC<Level1Props> = ({ onComplete }) => {
  
  const handleComplete = () => {
    console.log("Level 1 completed!");
    onComplete();
  };

  return (
    <div>
      <div
        className=" play-ground bg-gradient-to-r from-orange-500/80 to-red-700/80 backdrop-blur-md h-[700px] md:h-[700px] relative overflow-hidden md:w-[1000px] m-auto md:mt-10 sm:text-xs sm:mt-80 "
        
      >
        {/* Adding Java-related icons to the background */}
        <FontAwesomeIcon icon={faCoffee} className="text-black absolute top-1/4 left-1/4 text-6xl opacity-30 blur-sm" />
        <FontAwesomeIcon icon={faCode} className="text-black absolute bottom-1/4 right-1/4 text-sm opacity-10 blur-sm" />


        <div className="header text-white mt-5 md:mt-9 ml-5 md:ml-16">
    <h2 className="font-bold mb-4 text-2xl md:text-4xl underline">More Complex Programs</h2>
  </div>
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-left text-sm md:text-2xl font-bold w-full md:w-[800px] px-5">
    
    <p>
      Real computer programs can include thousands of lines of code.
    </p>
    <p>In this lesson, you&apos;ll start building more complex programs.</p>
  </div>
        <Continue onComplete={handleComplete}/>
      </div>

      {/* "Complete Level 1" button at the bottom right corner */}
      
      

      {/* Your level-specific content */}
    </div>
  );
};

export default Level1;
