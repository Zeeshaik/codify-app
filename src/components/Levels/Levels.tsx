import Link from "next/link";
import * as React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import AllUsers from "../AllUsers/AllUsers";
export interface ILevelsProps {
  title: string;
  description: string;
  link: string;
}

const levels: ILevelsProps[] = [
  {
    title: "Introduction to Java Programming",
    description: "Learn the basics of Java programming language.",
    link: "/java/introduction",
  },
  {
    title: "Multiple Statements",
    description: "Learn how multiple statements works.",
    link: "/java/multiple-statements",
  },
  {
    title: "Control Flow Statements",
    description: " Learn how control flow statements works.",
    link: "/java/control-flow-statements",
  },
  
];

const ProjectLevel: React.FunctionComponent<ILevelsProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <div>
      <section className="levels-section mx-4 md:mx-0 md:ml-72 md:w-[100px]">
        {/* Introduction Level */}
        <div className="grid gap-6 mb-4">
          <div className="p-4 border border-brand-orange bg-dark-layer-3 rounded-md transition-transform transform hover:scale-105 sec-1">
            <Link href={link} className="text-brand-orange hover:underline">
              <div className="flex gap-4">
                {/* <BsCheckCircle
                  className="mt-1 text-green-500"
                  fontSize={"18"}
                  width="18"
                /> */}
                <p className="text-xl font-bold w-[300px] md:w-[500px]">{title}</p>{" "}
                {/* <FaLock className=" justify-end" /> */}
              </div>
              <p className="text-gray-300">{description}</p>
            </Link>
          </div>
        </div>
        {/* <SteppedLineTo from="sec-1" to="sec-2" borderWidth={2} borderColor="orange" orientation="v" zIndex={-2} /> */}
      </section>
      
    </div>
  );
};

const Levels: React.FC = () => (
  <main>
    <div>
    {levels.map((level, index) => (
        <ProjectLevel key={index} {...level} />
      ))}
    </div>
  </main>
);

export default Levels;
