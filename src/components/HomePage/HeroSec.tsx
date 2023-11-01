import { useState } from 'react';
import Topbar from '../Topbar/Topbar';

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className=" relative  flex  min-h-screen justify-center bg-dark-layer-2"
    >
      
      <section className="container items-center px-4 pb-12 mx-auto lg:flex md:px-10 lg:px-20 xl:px-40">
        <div className="flex-1 space-y-4 sm:text-center lg:text-left mt-52 text-white">
          <h1 className="text-6xl font-bold text-orange-500 mb-4">
            CodeFun
          </h1>
          <p className="max-w-xl text-xl leading-relaxed text-gray-300 sm:mx-auto lg:ml-0 mb-8">
            CodeFun is a platform that helps you learn how to code by solving coding problems in a gamified way.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="javascript:void(0)"
              className="border border-orange-500 text-xl px-8 py-3 text-white bg-orange-500 rounded-md hover:bg-dark-layer-2 hover:border-orange-500 hover:text-orange-500"
            >
              Get Started
            </a>
            <a
              href="javascript:void(0)"
              className="text-xl px-8 py-3 text-orange-500 bg-white rounded-md"
            >
              See More
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706__340.jpg"
            className="w-full mx-auto sm:w-10/12 lg:w-full mt-48"
            alt="CodeFun Image"
          />
        </div>
      </section>
    </div>
  );
}
