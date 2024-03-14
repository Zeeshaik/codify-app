// Level12.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { faCoffee, faCode } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Java } from "@/utils/types/problem"
import { java } from "@/utils/java";
import Previous from "@/components/Buttons/Previous";
import LessonComplete from "@/components/LessoonComplete/LessonComplete";
import SubmitLevel from "@/components/Buttons/SubmitLevel";
import CompletedBtn from "@/components/Buttons/CompleteLevel";
interface Level12Props {
  onPrevious: () => void; // Callback for going to the previous level
}

const Level12: React.FC<Level12Props> = ({ onPrevious }) => {
  const handlePrevious = () => {
    // Handle logic to go to the previous level
    onPrevious();
  };

  const [code, setCode] = useState("");

  return (
    <div>
      <div
        className="play-ground bg-gradient-to-r from-orange-500/80 to-red-700/80 backdrop-blur-md h-[700px] md:h-[700px] relative overflow-hidden md:w-[1000px] m-auto md:mt-10"
        style={{ fontFamily: "cursive" }}
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
        <div className="absolute top-[120px]  left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-left text-xl md:text-2xl md:font-bold w-[350px] md:w-[800px]">
  
        <div className="header text-white ml-3 mt-3 md:mt-9 md:ml-16">
          <h2 className="font-bold mb-4 text-2xl md:text-4xl underline">
            Lesson Takeaways
          </h2>
        </div>
        <div className="absolute top-[300px] left-1/2  -translate-x-1/2 -translate-y-1/2 text-white text-left  text-xl md:text-2xl md:font-bold w-[350px] md:w-[800px]">
          <p>Awesome! You completed your second lesson 🚀.</p>
          <p>Remember the following important points:</p>
          <p>
            💡 You can add <span className=" font-bold ">multiple statements</span> to your programs
          </p>
          <p>💡 Text needs to be enclosed in <span className=" font-bold"> quotes</span></p>
          <p>💡 Java is a case-sensitive language.</p>
          <br />
          
          <p>
            In the next lesson. You will learn about the structure of programs in Java.
          </p>
        </div>
        <p>You learned Getting started with Java. You&apos;re one step closer to reachin your goals. </p>
        </div>
        <Previous onPrevious={handlePrevious} />
        <CompletedBtn level="multipleStatements" />
        {/* Add your content here */}
      </div>

      
    </div>
  );
};

export default Level12;


export async function getStaticPaths() {
	const paths = Object.keys(java).map((key) => ({
		params: { pid: key },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: { params: { pid: string } }) {
	const { pid } = params;
	const problem = java[pid];

	if (!problem) {
		return {
			notFound: true,
		};
	}
	 
}