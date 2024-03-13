import { useState } from "react";
import Topbar from "../Topbar/Topbar";
import Image from "next/image";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative  flex  min-h-screen justify-center bg-dark-layer-2">
      <section className="container items-center px-4 pb-12 mx-auto lg:flex md:px-10 lg:px-20 xl:px-40">
        <div className="flex-1 space-y-4 sm:text-center lg:text-left mt-20 md:mt-4 text-white">
          <h1 className=" text-4xl md:text-6xl font-bold text-orange-500 mb-4">
            CodeFun
          </h1>
          <p className="md:w-[400px] w-[300px] md:max-w-xl md:text-xl leading-relaxed text-gray-300 sm:mx-auto lg:ml-0 mb-8">
            CodeFun is a platform that helps you learn how to code by solving
            coding problems in a gamified way.
          </p>
          <div className="flex items-center space-x-6">
            <a
              href="javascript:void(0)"
              className="border border-orange-500 md:text-xl px-5 py-3 md:px-8 md:py-3 text-white bg-orange-500 rounded-md hover:bg-dark-layer-2 hover:border-orange-500 hover:text-orange-500"
            >
              Get Started
            </a>
            <a
              href="javascript:void(0)"
              className="md:text-xl px-8 py-3 text-orange-500 bg-white rounded-md"
            >
              See More
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/HeroSec.png"
            className="w-full mx-auto sm:w-10/12 lg:w-full mt-20 md:mt-0"
            alt="CodeFun Image"
            width={800}
            height={800}
          />
        </div>
      </section>
    </div>
  );
}
