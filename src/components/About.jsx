import React from "react";
import portrait from "../images/portrait.png";

const About = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
        <svg
          className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
          width="784"
          height="404"
          fill="none"
          viewBox="0 0 784 404"
        >
          <defs>
            <pattern
              id="svg-pattern-squares-1"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width="784" height="404" fill="url(#svg-pattern-squares-1)" />
        </svg>

        <svg
          className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="svg-pattern-squares-2"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#svg-pattern-squares-2)" />
        </svg>

        <div className="relative lg:flex lg:items-center">
          <div className="hidden lg:block lg:flex-shrink-0">
            <img
              className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
              src={portrait}
              alt="portrait of alexander may"
            />
          </div>
          <div className="relative lg:ml-10">
            <blockquote>
              <div className="text-2xl leading-9 font-medium text-gray-900">
                <h1 className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                  Über mich
                </h1>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  expedita voluptas culpa sapiente alias molestiae. Numquam
                  corrupti in laborum sed rerum et corporis.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 lg:hidden">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={portrait}
                      alt="portrait of alexander may"
                    />
                  </div>
                  <div className="ml-4 lg:ml-0">
                    <div className="text-base leading-6 font-medium text-gray-900">
                      Dein Coach
                    </div>
                    <div className="text-base leading-6 font-medium text-indigo-600">
                      Alex
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
