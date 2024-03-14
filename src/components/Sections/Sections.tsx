import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';

export interface ISectionsProps {
  image: string;
  title: string;
  description: string;
  links: string;
}

const projects: ISectionsProps[] = [
  {
    image: '/java-image.png',
    title: ' Java Language',
    description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. ',
    links: '/java',
  },
  {
    image: '/python-image.png',
    title: 'Python Language',
    description: ' Python is an interpreted high-level general-purpose programming language. Python\'s design philosophy emphasizes code readability with its notable use of significant indentation.',
    links: '/python',
  },
  {
    image: '/problem-solving.png',
    title: 'Problem Solving',
    description: 'Problem solving consists of using generic or ad hoc methods in an orderly manner to find solutions to problems. ',
    links: '/problems',
  },
];

const ProjectCard: React.FC<ISectionsProps> = ({ image, title, description, links }) => (
  <div className="bg-tertiary p-5 rounded-2xl sm:w-[340px] w-full transform hover:scale-105 transition-transform bg-orange-400 hover:bg-dark-layer-2 hover:border-orange-400 border border-orange-500 ">
    <div className="relative w-full h-[230px]">
    <Image
  src={image}
  alt="project_image"
  className="m-auto w-full h-full object-cover rounded-2xl"
  width={150}
  height={200}
/>
      
    </div>
    <div className="mt-5">
      <Link href={links} passHref className="text-brand-orange hover:underline">
     
          <h3 className="text-white font-bold text-[24px]">{title}</h3>

      </Link>
      <p className="mt-2 text-secondary text-[14px] text-gray-100">{description}</p>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {/* You can add additional content here if needed */}
    </div>
  </div>
);

const Sections: React.FC = () => (
  <main className="px-4 md:px-8 lg:px-16 xl:px-20" id="mainSection">
    <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-brand-orange pt-8">
      Play To Learn
    </h1>
    <div className="flex flex-wrap gap-10 text-center">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </main>
);

export default Sections;
