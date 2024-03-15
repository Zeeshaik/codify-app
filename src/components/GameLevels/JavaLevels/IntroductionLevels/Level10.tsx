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
      <div className="play-ground bg-gradient-to-r from-orange-500/80 to-red-700/80 backdrop-blur-md h-[1050px] md:h-[700px] relative overflow-hidden md:w-[1000px] m-auto md:mt-10 sm:text-xs sm:mt-80">
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
        <div className="absolute top-[500px] md:top-[350px] left-1/2 md:flex -translate-x-1/2 -translate-y-1/2 text-white text-left  text-xl md:text-2xl md:font-bold w-[350px] md:w-[800px]">
          <Image
            src={"/puzzel1.png"}
            width={350}
            height={400}
            className=" p-4 sm:w[10px]"
            alt={""}
          />
          <div className=" ml-4">
            <p>Can you solve this puzzle?</p>
            <p>
              🌟The monkey want&apos;s to reach the destination, Help him out by
              printing the &quot;<span className=" font-bold">Output</span>
              &quot;💡.
            </p>
            <p>
              🌟<span className=" font-bold text-red">NOTE:</span> When there is
              more than one direction print the correct direction 🧐
            </p>
            <div className=" mt-4 font-mono bg-black p-4 md:p-0 text-lg md:text-2xl">
              <span className=" ml-[250px] md:ml-[350px] text-blue-700">
                JAVA
              </span>
              <p className=" md:ml-[30px]  pb-3 flex">
                <span className=" text-blue-800 inline-block">System</span>.
                <span className=" text-pink-500 inline-block">out</span>
                .println(
                <span className=" text-green-600 inline-block ">
                  &quot;
                  <input
                    type="text"
                    className=" h-4 w-16 md:w-20 text-blue-600 p-4 rounded-md"
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') {
                        handleAdd();
                      }
                    }}
                  />
                  &quot;
                </span>
                );
              </p>
            </div>
            <label className="text-green-500 font-mono">
              {" "}
              Only options: Right/Left/MoveOn
            </label>
            <div className="flex justify-between">
              <button
                className="bg-green-500 text-white p-2 rounded-md mt-4"
                onClick={handleAdd}
              >
                Add
              </button>
              <button className="bg-red-500 text-white p-1  rounded-md mt-4" onClick={handleSubmit}>Submit</button>
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
