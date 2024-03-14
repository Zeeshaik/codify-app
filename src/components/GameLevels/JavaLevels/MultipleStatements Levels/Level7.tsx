// Level7.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { faCoffee, faCode } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Continue from "@/components/Buttons/Continue";
import Previous from "@/components/Buttons/Previous";
import { DndProvider, useDrag } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableOption from "@/components/DragAndDrop/DraggableOption";
import DroppableSection from "@/components/DragAndDrop/DroppableSection";
import { set } from "lodash";
import TryAgain from "@/components/Buttons/TryAgain";
import Check from "@/components/Buttons/Check";
interface Level7Props {
  onComplete: () => void;
  onPrevious: () => void; // Callback for going to the previous level
}

export const Level7Props = {
  OPTION: "option",
};

const Level7: React.FC<Level7Props> = ({ onComplete, onPrevious }) => {
  const handleComplete = () => {
    console.log("Level 1 completed!");
    onComplete();
  };

  const handlePrevious = () => {
    // Handle logic to go to the previous level
    onPrevious();
  };

  const [code, setCode] = useState("");
  const [selectedOption, setSelectedOption] = React.useState<string | null>(
    null
  );
  const [correctOption, setCorrectOption] = React.useState(true);
  const [isOptionDropped, setIsOptionDropped] = React.useState(false);
  const [isCorrectOption, setIsCorrectOption] = React.useState(false);
  const [selectedOption2, setSelectedOption2] = React.useState<string | null>(
    null
  );
  const [selectedOption3, setSelectedOption3] = React.useState<string | null>(
    null
  );
  const [isOptionDropped2, setIsOptionDropped2] = React.useState(false);
  const [isOptionDropped3, setIsOptionDropped3] = React.useState(false);
  const [isCorrectOption2, setIsCorrectOption2] = React.useState(false);
  const [isOptionsCorrect, setIsOptionsCorrect] = React.useState(false);

  const handleDrop = (droppedOption: string) => {
    setIsOptionDropped(true);
    setSelectedOption(droppedOption);
    setCode(droppedOption);
    setIsOptionsCorrect(droppedOption === "(" && selectedOption2 === ")");
  };

  const handleDrop2 = (droppedOption: string) => {
    setIsOptionDropped2(true);
    setSelectedOption2(droppedOption);
    setCode(droppedOption);
    setIsOptionsCorrect(selectedOption === "Head East" && droppedOption === "Cross the Road");
  };

  const handleDrop3 = (droppedOption: string) => {
    setIsOptionDropped3(true);
    setSelectedOption3(droppedOption);
    setCode(droppedOption);
    
  };
  const handleCheck = () => {
    setCorrectOption(isOptionsCorrect);
    if (isOptionsCorrect) {
      toast.success("Congarts you are too good.", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    } else {
      toast.error("Incorrect option dropped. Try again.", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    }
  };
  return (
    <div>
      <div className="play-ground bg-gradient-to-r from-orange-500/80 to-red-700/80 backdrop-blur-md h-[700px] md:h-[700px] relative overflow-hidden md:w-[1000px] m-auto md:mt-10">
        {/* Adding Java-related icons to the background */}
        <FontAwesomeIcon
          icon={faCoffee}
          className="text-black absolute top-1/4 left-1/4 text-6xl opacity-30 blur-sm"
        />
        <FontAwesomeIcon
          icon={faCode}
          className="text-black absolute bottom-1/4 right-1/4 text-sm opacity-10 blur-sm"
        />

       
        <div className="absolute  top-[250px] md:top-[250px] left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-left text-xl md:text-2xl md:font-bold  w-[410px] md:w-[800px]">
          
          <br />
          <p>
           When you give the computer many statements, the instructions will be executed line by line, from top to bottom.
          </p>
          <br />
          <p>
            Drag and Drop to get the output as given below lines in the correct order:
          </p>

          <div className=" italic font-light">
            <p>Head East</p>
            <p>Cross the Road</p>
            <p>Turn Left</p>
          </div>

          <div className=" mt-4 font-mono bg-black p-4 md:p-0 text-lg md:text-2xl">
            <span className=" ml-[290px] md:ml-[720px] text-blue-700">
              JAVA
            </span>
            <p className="ml-[1px] md:ml-[70px] pb-3 flex">
              <span className=" text-blue-800 inline-block">System</span>.
              <span className=" text-pink-500 inline-block">out</span>.println(
                <span className=" text-green-600 inline-block ">
                &quot;
              </span>
              <DroppableSection
                onDrop={handleDrop}
                isOptionDropped={isOptionDropped}
                droppedText={selectedOption}
              />
              <span className=" text-green-600 inline-block ">
                &quot;
              </span>
              );
              
            </p>

            <p className=" md:ml-[70px] pb-3 flex">
              <span className=" text-blue-800 inline-block">System</span>.
              <span className=" text-pink-500 inline-block">out</span>.println
              (<span className=" text-green-600 inline-block ">
                &quot;
              </span>
                <DroppableSection
                onDrop={handleDrop2}
                isOptionDropped={isOptionDropped2}
                droppedText={selectedOption2}
              />
              <span className=" text-green-600 inline-block ">
                &quot;
              </span>
              );
            </p>

            <p className=" md:ml-[70px] pb-3 flex">
              <span className=" text-blue-800 inline-block">System</span>.
              <span className=" text-pink-500 inline-block">out</span>.println
              (
              <span className=" text-green-600 inline-block ">
                &quot;
              </span>
              <DroppableSection
                onDrop={handleDrop3}
                isOptionDropped={isOptionDropped3}
                droppedText={selectedOption3 }
              />
              <span className=" text-green-600 inline-block ">
                &quot;
              </span>);
            </p>
          </div>
          <br />
          <div className="options flex gap-3">
            <DraggableOption
              optionText="Head East"
              setSelectedOption={setSelectedOption}
              isDropped={isOptionDropped}
            />
            <DraggableOption
              optionText="Cross the Road"
              setSelectedOption={setSelectedOption2}
              isDropped={isOptionDropped2}
            />
            <DraggableOption
              optionText="Turn Left"
              setSelectedOption={setSelectedOption3}
              isDropped={isOptionDropped3}
            />
          </div>
        </div>
        <button
          onClick={handleCheck}
          className="bg-green-700 text-white px-2 py-2 rounded-3xl absolute bottom-20 md:bottom-32 left-44 md:left-[450px]"
        >
          Check
        </button>

        {correctOption ? <Continue onComplete={handleComplete} /> : <TryAgain />}
        <Previous onPrevious={handlePrevious} />
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default Level7;
