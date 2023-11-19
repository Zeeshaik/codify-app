import * as React from 'react';

interface ICheckProps {
    isCorrect : boolean;
}

const Check: React.FunctionComponent<ICheckProps> = ({ isCorrect }) => {
    const handleCheck = () => {
        if (isCorrect) {
            alert("Congrats! All tests passed!");
        } else {
            alert("Try again!");
        }
    }

    return <button onClick={handleCheck} className=" bg-green-700 text-white px-2 py-2 rounded-3xl absolute bottom-20 md:bottom-32 left-44 md:left-[450px]">Check</button>;
};

export default Check;
