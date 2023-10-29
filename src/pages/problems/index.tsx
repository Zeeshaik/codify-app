import ProblemsTable from '@/components/ProblemsTable/ProblemsTable';
import Topbar from '@/components/Topbar/Topbar';
import useHasMounted from '@/hooks/useHasMounted';
import * as React from 'react';
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
interface IProblemsProps {
}

const Problems: React.FunctionComponent<IProblemsProps> = (props) => {
	const [loadingProblems, setLoadingProblems] = useState(true);
	const hasMounted = useHasMounted();

	if (!hasMounted) return null;


	return (
		<>
			<main className='bg-dark-layer-2 min-h-screen'>
				<Topbar />
				<section
        className="container items-center px-4 pb-12 mx-auto lg:flex md:px-8 md:py-16 lg:px-20 "
        
      >
        
        <div className="lg:w-1/2 md:w-full pr-4 md:pr-8 mb-8 lg:mb-0 sm:mt-4 md:mt-10" 
        >
          <img
            src="./problem-solving1.png"
            className="w-full mx-auto lg:w-10/12"
            alt="Java Image"
          />
        </div>
        <div className="flex-1 space-y-4 sm:text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center sm:text-left text-orange-500">
            JAVA
          </h1>
          <div className="java-details h-24 text-center sm:text-left">
            <span className="primary-text">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                <TypeAnimation
                  sequence={[
                    'Unlock the Power of Java Programming.',
                    2000,
                    'Java: Where Innovation Meets Coding.',
                    2000,
                    'Master Java, Master Possibilities.',
                    2000,
                    'Transform Your Ideas into Code with Java.',
                    2000,
                    'Dive into Java, Unleash your Coding Potential.',
                    2000,
                  ]}
                  speed={80}
                  style={{
                    fontFamily: 'ShadowIntoLight',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    color: 'white',
                  }}
                  repeat={Infinity}
                />
              </h1>
            </span>
          </div>
          <div className="flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="javascript:void(0)"
              className="text-xl px-8 py-3 text-white bg-orange-500 rounded-md mb-4 sm:mb-0"
             
            >
              Get Started
            </a>
            <a
              href="https://docs.oracle.com/en/java/"
              className="text-xl px-8 py-3 text-gray-500 bg-white rounded-md"
            >
              See More
            </a>
          </div>
        </div>
      </section>
				<h1
					className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium
					uppercase mt-10 mb-5'
				>
					&ldquo; QUALITY OVER QUANTITY &rdquo; 👇
				</h1>
				<div className='relative overflow-x-auto mx-auto px-6 pb-10'>
					{loadingProblems && (
						<div className='max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse'>
							{[...Array(10)].map((_, idx) => (
								<LoadingSkeleton key={idx} />
							))}
						</div>
					)}
					<table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>

						{!loadingProblems && (
							<thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
								<tr>
									<th scope='col' className='px-1 py-3 w-0 font-medium'>
										Status
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Title
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Difficulty
									</th>

									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Category
									</th>
									<th scope='col' className='px-6 py-3 w-0 font-medium'>
										Solution
									</th>
								</tr>
							</thead>
						)}
						<ProblemsTable setLoadingProblems={setLoadingProblems}/>

					</table>
				</div>
			</main>
		</>
	);
};

const LoadingSkeleton = () => {
	return (
		<div className='flex items-center space-x-12 mt-4 px-6'>
			<div className='w-6 h-6 shrink-0 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32  rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52  w-32 rounded-full bg-dark-layer-1'></div>
			<div className='h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1'></div>
			<span className='sr-only'>Loading...</span>
		</div>
	);
};

export default Problems;
