import Topbar from "@/components/Topbar/Topbar";
import { auth, firestore } from "@/firebase/firebase";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { FooterComponent } from "flowbite-react/lib/esm/components/Footer";
import router from "next/router";
import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { TypeAnimation } from "react-type-animation";

interface IPythonHomePageProps {}

export function PythonHomePage(props: IPythonHomePageProps) {
  const [user] = useAuthState(auth);

  const handleStartLearning = () => {
    // Logic to navigate to the Python learning section
    toast.info("The Python Course will be added pretty soon 🫡, Stay Tuned!", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
        });
  };

  return (
    <div className="bg-dark-layer-2 min-h-screen">
      {/* Topbar Component */}
      <Topbar />

      {/* Hero Section */}
      <section className="container items-center px-4 pb-12 mx-auto lg:flex md:px-8 md:py-16 lg:px-20">
        <div className="lg:w-1/2 md:w-full pr-4 md:pr-8 mb-8 lg:mb-0 sm:mt-4 md:mt-10">
          <img
            src="./python-image.png"
            className="w-full mx-auto lg:w-10/12  rounded-3xl mt-5"
            alt="Python Image"
          />
        </div>
        <div className="flex-1 space-y-4 sm:text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center sm:text-left text-orange-500">
            Python
          </h1>
          <div className="python-details h-24 text-center sm:text-left">
            <span className="primary-text">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                <TypeAnimation
                  sequence={[
                    "Unlock the Power of Python Programming.",
                    2000,
                    "Python: Where Simplicity Meets Efficiency.",
                    2000,
                    "Master Python, Master Automation.",
                    2000,
                    "Transform Your Ideas into Code with Python.",
                    2000,
                    "Dive into Python, Unleash your Coding Potential.",
                    2000,
                  ]}
                  speed={80}
                  style={{
                    fontFamily: "ShadowIntoLight",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    color: "white",
                  }}
                  repeat={Infinity}
                />
              </h1>
            </span>
          </div>
          <br />
          <div
            className="mb-7 md:text-2xl sm:p-5 md:p-0"
            style={{
              fontFamily: "ShadowIntoLight",
              fontWeight: "bold",
              letterSpacing: "1px",
              color: "white",
            }}
          >
    
            {/* Responsive Code for Small Screens */}
            <div >
              <p>Python is a versatile programming language...</p>
            </div>
          </div>
          <br />
          <div className="flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={handleStartLearning}
              className="text-xl px-8 py-3 text-white bg-orange-500 rounded-md mb-4 sm:mb-0 hover:bg-green-600 transition duration-300"
            >
              Get Started
            </button>
            <a
              href="https://www.python.org/doc/"
              className="text-xl px-8 py-3 text-gray-500 bg-white rounded-md hover:text-gray-700 hover:bg-gray-200 transition duration-300"
            >
              See More
            </a>
          </div>
        </div>
      </section>

      {/* Footer Component */}
    
    </div>
  );
}

export default PythonHomePage;
