import React from 'react';

const BufferingSpinner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="w-[100px] h-[100px] border-t-4 border-b-4  border-orange-500 rounded-full animate-spin"></div>
        </div>
    );
};

export default BufferingSpinner;
