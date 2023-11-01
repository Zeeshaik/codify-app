import * as React from 'react';

interface IContinueProps {
  onComplete: () => void;
}

const Continue: React.FunctionComponent<IContinueProps> = ({ onComplete }) => {
  const handleComplete = () => {
    // Additional logic specific to Level 2
    console.log("Level 2 completed!");
    onComplete(); // Call the onComplete callback to advance to the next level
  };

  return (
    <div>
      <button
        onClick={handleComplete}
        className="bg-orange-500 text-white px-6 py-3 md:mt-4 absolute bottom-5 md:bottom-10 right-5 md:right-[150px] rounded-full hover:bg-orange-600 transition duration-300"
        style={{ position: 'fixed' }} // Ensure the button stays fixed on the screen
      >
        Continue
      </button>
    </div>
  );
};

export default Continue;
