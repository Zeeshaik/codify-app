// Level1.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCode } from "@fortawesome/free-solid-svg-icons"; // Import Java-related icons
import Continue from "@/components/Buttons/Continue";

interface Level1Props {
  onComplete: () => void;
}

const Level1: React.FC<Level1Props> = ({ onComplete }) => {
  
  const handleComplete = () => {
    console.log("Level 1 completed!");
    onComplete();
  };

  return (
    <div>
      <div
        className=" play-ground bg-gradient-to-r from-orange-500/80 to-red-700/80 backdrop-blur-md h-[700px] md:h-[700px] relative overflow-hidden md:w-[1000px] m-auto md:mt-10 sm:text-xs sm:mt-80 "
        
      >
        {/* Adding Java-related icons to the background */}
        <FontAwesomeIcon icon={faCoffee} className="text-black absolute top-1/4 left-1/4 text-6xl opacity-30 blur-sm" />
        <FontAwesomeIcon icon={faCode} className="text-black absolute bottom-1/4 right-1/4 text-sm opacity-10 blur-sm" />

        <div className="header text-white mt-3 ml-3 md:mt-9 md:ml-16">
          <h2 className="font-bold mb-4 text-3xl md:text-4xl underline">Welcome to Java!🍵</h2>
        </div>
        <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-left text-xl md:text-2xl md:font-bold w-[350px] md:w-[800px]">
          <p>
            <span>Java</span> is one of the most popular programming languages.
          </p>
          <p>
            - Java&apos;s slogan is &apos;Write Once, Run Anywhere&apos;. Java programs can run on different platforms, including Windows,
            Mac, Linux, and mobile devices. You can use Java to build apps, games, websites, and much more!
          </p>
          <p>
            - Java is known for its versatility and platform independence. It is widely used for developing large-scale
            enterprise applications, mobile applications (Android), and web applications. The language is object-oriented
            and designed to be easy to write and understand.
          </p>
        </div>
        <Continue onComplete={handleComplete}/>
      </div>

      {/* "Complete Level 1" button at the bottom right corner */}
      
      

      {/* Your level-specific content */}
    </div>
  );
};

export default Level1;
