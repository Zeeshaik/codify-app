import * as React from "react";
import { useDrag, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Level7Props } from "../GameLevels/JavaLevels/IntroductionLevels/Level7";

interface IDraggableOptionProps {
  optionText: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
  isDropped: boolean;
}

const DraggableOption: React.FC<IDraggableOptionProps> = ({
  optionText,
  setSelectedOption,
  isDropped,
}) => {
  const [, drag] = useDrag({
    type: Level7Props.OPTION as string,
    item: { optionText },
  });

  // Handle click to set the selected option
  const handleClick = () => {
    setSelectedOption(optionText);
  };

  return (
    <div
      ref={drag}
      className={`your-option-styles ${
        isDropped ? "hidden" : ""
      } bg-gray-600 px-3 py-2 rounded-lg hover:cursor-pointer`}
      onClick={handleClick}
    >
      {optionText}
    </div>
  );
};

export default DraggableOption;
