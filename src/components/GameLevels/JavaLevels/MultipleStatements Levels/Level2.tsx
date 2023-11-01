// Level2.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { faCoffee, faCode } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Continue from "@/components/Buttons/Continue";
import Previous from "@/components/Buttons/Previous";

interface Level2Props {
  onComplete: () => void;
  onPrevious: () => void; // Callback for going to the previous level
}

const Level2: React.FC<Level2Props> = ({ onComplete, onPrevious }) => {
  const handleComplete = () => {
    // Additional logic specific to Level 2
    console.log("Level 2 completed!");
    onComplete(); // Call the onComplete callback to advance to the next level
  };

  const handlePrevious = () => {
    // Handle logic to go to the previous level
    onPrevious();
  };

  const [code, setCode] = useState("");

  const handleCodeChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCode(e.target.value);
  };

  return (
    <div>
      <div
        className="play-ground bg-gradient-to-r from-orange-500/80 to-red-700/80 backdrop-blur-md h-[500px] md:h-[700px] relative overflow-hidden w-full m-auto mt-10 text-xs md:w-[1000px] md:mt-10"
        style={{ fontFamily: "cursive" }}
      >
        {/* Adding Java-related icons to the background */}
        <FontAwesomeIcon
          icon={faCoffee}
          className="text-black absolute top-1/4 left-1/4 text-4xl md:text-6xl opacity-30 blur-sm"
        />
        <FontAwesomeIcon
          icon={faCode}
          className="text-black absolute bottom-1/4 right-1/4 text-xs md:text-sm opacity-10 blur-sm"
        />

        <div className="header text-white mt-5 md:mt-9 ml-5 md:ml-16">
          <h2 className="font-bold mb-4 text-2xl md:text-4xl underline">Coding</h2>
        </div>
        <div className="absolute top-[340px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-left text-sm md:text-2xl font-bold w-full md:w-[800px] px-5">
          <p className="mb-4">
            A line of code is called a statement. A statement performs a specific task.
          </p>
          <p>The output command is an example of statement.</p>
          <br />
          <div className="font-mono bg-black">
            <span className="md:ml-[700px] text-blue-700">JAVA</span>
            <p className="ml-[70px] pb-3"><span className="text-blue-800">System</span>.<span className="text-pink-500">out</span>.println(<span className="text-green-600">&apos;Write once, run Anywhere!&apos;</span>);</p>
          </div>
          
          <div className="flex text-sm md:text-xl">
            <Image src="/code1.png" alt="code image" width={70} height={70}/> 
           <p className="mt-12 ml-2 text-left">  Each statement needs to end with a <span className="text-black">semicolon ;</span>.</p>
          </div>
        </div>
        <Continue onComplete={handleComplete}/>
        <Previous onPrevious={handlePrevious}/>
      </div>
    </div>
  );
};

export default Level2;
