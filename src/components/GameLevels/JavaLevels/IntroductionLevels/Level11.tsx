// Level11.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { faCoffee, faCode } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Continue from "@/components/Buttons/Continue";
import Previous from "@/components/Buttons/Previous";
interface Level11Props {
 
  onPrevious: () => void; // Callback for going to the previous level
}

const Level11: React.FC<Level11Props> = ({  onPrevious }) => {
   
    

  const handlePrevious = () => {
    // Handle logic to go to the previous level
    onPrevious();
  };

  const [code, setCode] = useState("");


   return (
    <div>
      <div
        className="play-ground bg-gradient-to-r from-orange-500/80 to-red-700/80 backdrop-blur-md h-[700px] md:h-[700px] relative overflow-hidden md:w-[1000px] m-auto md:mt-10"
  
      >
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
          <h2 className="font-bold mb-4 text-2xl md:text-4xl underline">Lesson Takeaways</h2>
        </div>
        <div className="absolute top-[300px] left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-left  text-xl md:text-2xl md:font-bold w-[350px] md:w-[800px]">
          <p>Awesome! You completed your first lesson 🚀.</p>
          <p>Remember the following important points:</p>
          <p>💡 You can write code that generates <span className="font-bold text-2xl md:text-3xl">outputs</span> with the <span className="font-bold text-2xl md:text-3xl">System.out.println()</span> statement.</p>
          <p>💡 The println instruction needs to be followed by parentheses</p>
          <br />
          <h3 className=" text-2xl md:text-4xl text-black">What&apos;s next ⁉️</h3>
          <p>In the next lesson. You will create cod ewith multiple lines and different types of data.</p>
        </div>
        
      <Previous onPrevious={handlePrevious}/>

        {/* Add your content here */}
      </div>
      
    </div>
  );
};

export default Level11;
