// Level6.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { faCoffee, faCode } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Continue from "@/components/Buttons/Continue";
import Previous from "@/components/Buttons/Previous";
interface Level6Props {
  onComplete:() => void;
  onPrevious: () => void; // Callback for going to the previous level
}

const Level6: React.FC<Level6Props> = ({ onComplete, onPrevious }) => {
    const handleComplete = () => {
        console.log("Level 1 completed!");
        onComplete();
      };
    

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

        <div className="header text-white mt-9 ml-16">
          <h2 className="font-bold mb-4 text-4xl underline">Output</h2>
        </div>
        <div className="absolute top-[300px] left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-left text-2xl font-bold w-[800px]">
          <p className=" mb-4">
            Coders use outputs all the time to check that the computere is following the given instructions and fic problems with code.
          </p> <br />
          
          <p>The following line of code displays Java&apos;s slogan on the screen as an output :</p> <br />
          <div className=" font-mono bg-black">
            <span className=" ml-[720px] text-blue-700">JAVA</span>
            <p className=" ml-[70px] pb-3"><span className=" text-blue-800">System</span>.<span className=" text-pink-500">out</span>.println(<span className=" text-green-600">&apos;Write once, run Anywhere!&apos;</span>);</p>
          </div>
          
        </div>

        {/* Add your content here */}
      </div>
      <Continue onComplete={handleComplete}/>
      <Previous onPrevious={handlePrevious}/>
    </div>
  );
};

export default Level6;
