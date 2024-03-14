import JavaGame from "@/components/Games/JavaGame/JavaGame";
import Topbar from "@/components/Topbar/Topbar";
import FooterComponent from "@/components/Footer/Footer";
import Link from "next/link";
import * as React from "react";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { SteppedLineTo } from "react-lineto";
import Levels from "@/components/Levels/Levels";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import AllUsers from "@/components/AllUsers/AllUsers";

export interface IJavaHomePageProps {}

export function JavaHomePage(props: IJavaHomePageProps) {
  const [user, loading] = useAuthState(auth);
  const scrollToLanguagesSection = () => {
    const languagesSection = document.getElementById("levels-section");

    if (languagesSection) {
      console.log("Scrolling to languages section");
      languagesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-dark-layer-2 min-h-screen ">
      <Topbar />
      {/* Hero Section */}
      <section className="container items-center px-4 pb-12 mx-auto lg:flex md:px-8 md:py-16 lg:px-20 ">
        <div className="lg:w-1/2 md:w-full pr-4 md:pr-8 mb-8 lg:mb-0 sm:mt-4 md:mt-10">
          <img
            src="./java-image (2).png"
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
                    "Unlock the Power of Java Programming.",
                    2000,
                    "Java: Where Innovation Meets Coding.",
                    2000,
                    "Master Java, Master Possibilities.",
                    2000,
                    "Transform Your Ideas into Code with Java.",
                    2000,
                    "Dive into Java, Unleash your Coding Potential.",
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
          <div
            className="mb-7 md:text-2xl sm:p-5 md:p-0"
            style={{
              fontFamily: "ShadowIntoLight",
              fontWeight: "bold",
              letterSpacing: "1px",
              color: "white",
            }}
          >
            <p className="hidden sm:block">import java.util.*;</p>
            <p className="hidden sm:block">
              public static void main(Strings[] args) {"{"}
            </p>
            <p className="hidden sm:block">
              {/* follow indentation for below print statements  */}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <TypeAnimation
                sequence={[
                  'System.out.println("Welcome to CodeFun!😍");',
                  2000,
                  'System.out.println("Get ready to learn Java!🚀");',
                  2000,
                  'System.out.println("Let\'s get started!👇");',
                  2000,
                ]}
                speed={10}
                style={{
                  fontFamily: "ShadowIntoLight",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  color: "white",
                }}
                repeat={Infinity}
              />
            </p>
            <p className="hidden sm:block">{"}"}</p>

            {/* Responsive Code for Small Screens */}
            <div className="sm:hidden">
              <p>import java.util.*;</p>
              <p>public static void main(Strings[] args) {"{"}</p>
              <p>
                {/* follow indentation for below print statements  */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <TypeAnimation
                  sequence={[
                    'System.out.println("Welcome to CodeFun!😍");',
                    2000,
                    'System.out.println("Get ready to learn Java!🚀");',
                    2000,
                    'System.out.println("Let\'s get started!👇");',
                    2000,
                  ]}
                  speed={10}
                  style={{
                    fontFamily: "ShadowIntoLight",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    color: "white",
                  }}
                  repeat={Infinity}
                />
              </p>
              <p>{"}"}</p>
            </div>
          </div>

          <br />
          <div className="flex flex-col items-center sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#level-section"
              className="text-xl px-8 py-3 text-white bg-orange-500 rounded-md mb-4 sm:mb-0"
              onClick={scrollToLanguagesSection}
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
      <br />
      {/* Levels Section */}
      <div id="level-section">
        <h3 className="text-2xl sm:text-3xl md:text-2xl lg:text-5xl  underline  font-bold text-center sm:text-left text-white md:ml-72 mb-10">
          Start Learning Java
        </h3>
        <div className="md:flex ">
          <div className=" md:mt-20">
            <Levels />
          </div>
          <div className="p-4 md:p-0 md:ml-[500px] ">
            <AllUsers />
          </div>
        </div>
      </div>

      {/* footer */}
      <FooterComponent/>
    </div>
  );
}

export default JavaHomePage;
