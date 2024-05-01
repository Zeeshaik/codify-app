// Level10.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { faCoffee, faCode } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Continue from "@/components/Buttons/Continue";
import Previous from "@/components/Buttons/Previous";
interface Level10Props {
  onComplete: () => void;
  onPrevious: () => void; // Callback for going to the previous level
}

const Level10: React.FC<Level10Props> = ({ onComplete, onPrevious }) => {
  const handleComplete = () => {
    console.log("Level 1 completed!");
    onComplete();
  };

  const handlePrevious = () => {
    // Handle logic to go to the previous level
    onPrevious();
  };

  const [code, setCode] = useState("");
  let directions: (string | undefined)[] = [];
  let correctDirectons = [
    "left",
    "left",
    "left",
    "left",
    "left",
    "moveon",
    "left",
    "right",
    "left",
    "right",
    "right",
    "left",
    "right",
    "moveon",
    "left",
  ];
  let cDirectionLen = correctDirectons.length;
  const handleAdd = () => {
    // Add your logic here
    let inputVal = document.querySelector("input")?.value;
    //convert to lower case
    inputVal = inputVal?.toLowerCase();
    if (inputVal === "right" || inputVal === "left" || inputVal === "moveon") {
      directions.push(inputVal);
      toast.success("Added: " + inputVal, {
        position: "top-center",
        autoClose: 1000,
      });
    } else {
      toast.error("Invalid input");
    }
    document.querySelector("input")!.value = "";
    console.log(directions + " " + cDirectionLen);
  };
  let flag = false;
  const handleSubmit = () => {
    // Add your logic here
    if (JSON.stringify(directions) === JSON.stringify(correctDirectons)) {
      toast.success("Correct! 🎉");
      flag = true;
    } else {
      toast.error("Incorrect! 🤯");
    }
  };
  return (
    <div>
      <div className="play-ground bg-gradient-to-r from-orange-500/80 to-red-700/80 backdrop-blur-md h-[650px] md:h-[700px] relative overflow-hidden md:w-[1000px] m-auto md:mt-10 sm:text-xs sm:mt-80">
        {/* Adding Java-related icons to the background */}
        <FontAwesomeIcon
          icon={faCoffee}
          className="text-black absolute top-1/4 left-1/4 text-6xl opacity-30 blur-sm"
        />
        <FontAwesomeIcon
          icon={faCode}
          className="text-black absolute bottom-1/4 right-1/4 text-sm opacity-10 blur-sm"
        />

        <div className="header text-white ml-3 mt-3 md:mt-9 md:ml-16">
          <h2 className="font-bold mb-4 text-2xl md:text-4xl underline">
            Solve Puzzle
          </h2>
        </div>
        <div className="absolute top-[300px] md:top-[350px] left-1/2 md:flex -translate-x-1/2 -translate-y-1/2 text-white text-left  text-xl md:text-2xl md:font-bold w-[350px] md:w-[800px]">
          <div className=" ml-6 md:ml-[250px]">
            <div className="flex justify-between">
              <a
                href="https://zeeshaik.github.io/Maze-Game-main/"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center justify-center"
                style={{ width: "290px", height: "290px" }}
              >
                Play 
              </a>
            </div>
          </div>
        </div>
        {/* {flag && (<Continue onComplete={handleComplete} />)}  */}
        <Continue onComplete={handleComplete} />
        <Previous onPrevious={handlePrevious} />

        {/* Add your content here */}
      </div>
    </div>
  );
};

export default Level10;
