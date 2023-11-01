// Level11.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { faCoffee, faCode } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import Previous from "@/components/Buttons/Previous";
import LessonComplete from "@/components/LessoonComplete/LessonComplete";
interface Level11Props {
  onPrevious: () => void; // Callback for going to the previous level
}

const Level11: React.FC<Level11Props> = ({ onPrevious }) => {
  const handlePrevious = () => {
    // Handle logic to go to the previous level
    onPrevious();
  };

  const [code, setCode] = useState("");

  return (
    <div>
      <div
        className="play-ground bg-gradient-to-r from-orange-500/80 to-red-700/80 backdrop-blur-md md:h-[700px] relative overflow-hidden md:w-[1000px] m-auto md:mt-10"
        style={{ fontFamily: "cursive" }}
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
        <div className="absolute top-[300px] left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-left text-2xl font-bold w-[800px]">
        <LessonComplete />
        <p>You learned Getting started with Java. You&apos;re one step closer to reachin your goals. </p>
        </div>
        <Previous onPrevious={handlePrevious} />  
        {/* Add your content here */}
      </div>

      
    </div>
  );
};

export default Level11;
