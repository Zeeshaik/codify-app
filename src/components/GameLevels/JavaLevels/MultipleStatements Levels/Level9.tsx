// Level9.tsx
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
interface Level9Props {
  onComplete: () => void;
  onPrevious: () => void; // Callback for going to the previous level
}

export const Level9Props = {
  OPTION: "option",
};

const Level9: React.FC<Level9Props> = ({ onComplete, onPrevious }) => {
  const handleComplete = () => {
    console.log("Level 1 completed!");
    onComplete();
  };

  const handlePrevious = () => {
    // Handle logic to go to the previous level
    onPrevious();
  };

  const [code, setCode] = useState("");
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  const [isOptionDropped, setIsOptionDropped] = React.useState(false);
  const [correctOption, setCorrectOption] = React.useState(false);
  const[check , setCheck] = React.useState(false);
  const handleDrop = (droppedOption: string) => {
    //Change the component text from current text to New Message
    setIsOptionDropped(true);
    setSelectedOption(droppedOption);
    setCode(droppedOption);

    // Validate if the dropped option is correct
    if (droppedOption === "System") {
      
      toast.success("Give yourself a pat on your back.", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      setCheck(true);
      // Handle other logic for correct drop
    } else {
      setCorrectOption(true);
      toast.error("Incorrect option dropped. Try again.", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });

      // Handle other logic for incorrect drop
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

        <div className="header text-white mt-3 ml-3 md:mt-9 md:ml-16">
          <h2 className="font-bold mb-4 text-2xl md:text-4xl underline">
            Output
          </h2>
        </div>
        <div className="absolute  top-[250px] md:top-[250px] left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-left text-xl md:text-2xl md:font-bold  w-[360px] md:w-[800px]">
        <p>
            Java is case-sensitive language. This means that you need to pay attention to correct input of uppercase and lowercase letters.
          </p>
          <br />
          <p>
            Drag and Drop to write code that runs without errors;
          </p>

          <div className=" mt-4 font-mono bg-black p-4 md:p-0 text-lg md:text-2xl">
            <span className=" ml-[290px] md:ml-[720px] text-blue-700">
              JAVA
            </span>
            <p className=" md:ml-[70px] pb-3 flex">
            <DroppableSection onDrop={handleDrop} isOptionDropped={isOptionDropped} droppedText={selectedOption}/>.
              <span className=" text-pink-500 inline-block">out</span>.<span className=" text-blue-800 inline-block">println</span>(
              <span className=" text-green-600 inline-block">&quot;Game Over&quot; </span>);
            </p>
          </div>
          <br />
          <div className="options flex gap-3">
            <DraggableOption optionText="system" setSelectedOption={setSelectedOption} isDropped={isOptionDropped}/>
            <DraggableOption optionText="System" setSelectedOption={setSelectedOption} isDropped={isOptionDropped}/>
            
          </div>
        </div>
        { correctOption ? <TryAgain /> : ''}
        {/* {check &&(<Continue onComplete={handleComplete} />)} */}
        <Continue onComplete={handleComplete} />
        <Previous onPrevious={handlePrevious} />
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default Level9;
