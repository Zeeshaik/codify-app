import * as React from 'react';

interface IPreviousProps {
    onPrevious: () => void;
}

const Previous: React.FunctionComponent<IPreviousProps> = ({onPrevious}) => {
    const handlePrevious = () => {
        // Handle logic to go to the previous level
        onPrevious();
      };
  return(
    <div>
        <button
        onClick={handlePrevious}
        className="bg-gray-900 text-white px-6 py-3 mt-4 absolute bottom-20 left-[430px] rounded-full hover:bg-gray-600 transition duration-300"
      >
        Previous
      </button>
    </div>
  );
};

export default Previous;
