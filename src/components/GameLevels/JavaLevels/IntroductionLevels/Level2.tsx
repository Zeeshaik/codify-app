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

  // You can remove these if not used
  /*
  const [feedback, setFeedback] = useState("");

  const submitCode = () => {
    // Simple validation for demonstration purposes
    if (code.trim() === "Hello, Java!") {
      toast.success("Congratulations!!");
      setCompleted(true);
    } else {
      setFeedback("Try again. Your code is incorrect.");
    }
  };
  */

  return (
    <div>
      <div
        className="play-ground bg-gradient-to-r from-orange-500/80 to-red-700/80 backdrop-blur-md h-[700px] md:h-[700px] relative overflow-hidden md:w-[1000px] m-auto md:mt-10"
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

        <div className="header text-white mt-9 md:ml-16 ml-5">
          <h2 className="font-bold mb-4 text-2xl md:text-4xl underline">Coding</h2>
        </div>
        <div className="absolute top-[340px] left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-left md:text-2xl font-bold w-[300px] md:w-[800px]">
          <p className=" mb-4">
            Humans use computer programs to communicate with machines. Without
            computer programs, we wouldn&apos;t have smartphones, websites, or even
            exploration in outer space!
          </p>
          <div className="flex flex-col w-[300px] h-[200px] md:flex-row md:w-[800px] ">
            <Image src="/code.png" alt="Code Image" width={500} height={500} />
            <p className=" ml-3 mt-4 md:ml-9 md:mt-3 text-center">
             
              Learning some coding can help you innovate and create different
              solutions to problems, giving you a competitive edge in this
              technology-driven
            </p>
          </div>
          
          <div className="flex mt-16 md:text-xl">
            <Image src="/code1.png" alt="code image" width={90} height={90}/> 
           <p className=" mt-12 ml-2 text-left"> <span className=" text-black">Everyone</span> can learn coding with CodeFun.</p>
          </div>
        </div>
        <Continue onComplete={handleComplete}/>
      <Previous onPrevious={handlePrevious}/>
        {/* Add your content here */}
      </div>
      
    </div>
  );
};

export default Level2;
