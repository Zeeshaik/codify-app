import Link from "next/link";
import * as React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
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
    title: "Introduction",
    description: "some thing",
    link: "",
  },
  {
    title: "Introduction",
    description: "some thing",
    link: "",
  },
  {
    title: "Introduction",
    description: "some thing",
    link: "",
  },
  {
    title: "Introduction",
    description: "some thing",
    link: "",
  },
  {
    title: "Introduction",
    description: "some thing",
    link: "",
  },
];

const ProjectLevel: React.FunctionComponent<ILevelsProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <section className="levels-section mx-4 md:mx-0 md:ml-72 md:w-[3000px]">
      {/* Introduction Level */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-4">
        <div className="p-4 border border-brand-orange bg-dark-layer-3 rounded-md transition-transform transform hover:scale-105 sec-1">
          <Link href={link} className="text-brand-orange hover:underline">
            <div className="flex gap-4">
              <BsCheckCircle
                className="mt-1 text-green-500"
                fontSize={"18"}
                width="18"
              />
              <p className="text-xl font-bold w-[700px]">{title}</p>{" "}
              <FaLock className=" justify-end" />
            </div>
            <p className="text-gray-300 ml-8">{description}</p>
          </Link>
        </div>
      </div>
      {/* <SteppedLineTo from="sec-1" to="sec-2" borderWidth={2} borderColor="orange" orientation="v" zIndex={-2} /> */}
    </section>
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
