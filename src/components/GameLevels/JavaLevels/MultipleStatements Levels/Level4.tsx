// Level4.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { faCoffee, faCode } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Continue from "@/components/Buttons/Continue";
import Previous from "@/components/Buttons/Previous";
interface Level4Props {
  onComplete: () => void;
  onPrevious: () => void; // Callback for going to the previous level
}

const Level4: React.FC<Level4Props> = ({ onComplete, onPrevious }) => {
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
          <h2 className="font-bold mb-4 text-4xl underline">Multiple Statements</h2>
        </div>
        <div className="absolute top-[300px] left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-left text-2xl font-bold w-[800px]">
          <p className=" mb-4">
            You can add as many statements (or lines of code) as you need.
          </p> <br />
          <p className=" mb-4">
            The following code consists of 2 statements. It outputs two messages in <span className="text-black">different lines</span>
          </p>
          <br />
          <div className=" font-mono bg-black">
            <span className=" ml-[720px] text-blue-700">JAVA</span>
            <p className=" ml-[70px] pb-3"><span className=" text-blue-800">System</span>.<span className=" text-pink-500">out</span>.println(<span className=" text-green-600">&apos;Name :&apos;</span>);</p>
            <p className=" ml-[70px] pb-3"><span className=" text-blue-800">System</span>.<span className=" text-pink-500">out</span>.println(<span className=" text-green-600">&apos;Surname :&apos;</span>);</p>
          </div>

          <div className="flex text-xl">
            <Image src="/code1.png" alt="code image" width={90} height={90}/> 
           <p className=" mt-12 ml-2 text-left">Remember your code will result in an error if you forget  <span className=" text-black">semicolon ;</span> at the end of the statements.</p>
          </div>
          
        </div>
        <Continue onComplete={handleComplete}/>
      <Previous onPrevious={handlePrevious}/>
        {/* Add your content here */}
      </div>
      
    </div>
  );
};

export default Level4;
