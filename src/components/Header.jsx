import React, { useState } from "react";
import PropTypes from "prop-types";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import logo from "../images/logo.svg";
import Transition from "./Transition";

// eslint-disable-next-line max-lines-per-function
const Header = (props) => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <>
      <div className="pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          className={`relative flex items-center justify-between sm:h-10 lg:justify-start ${
            props.center ? "lg:justify-center" : null
          }`}
        >
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <img
                  className="h-8 w-auto sm:h-10"
                  src={logo}
                  alt="skollcoaching logo"
                />
              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  onClick={() => toggleExpansion(true)}
                  aria-label="Toggle menu"
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4">
            <a
              href="https://pr.skollcoaching.com"
              className="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
            >
              PR Tracker
            </a>
            <AnchorLink
              to="/#coaching-inquiry"
              className="ml-8 font-medium text-indigo-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out"
            >
              Coaching Anfrage
            </AnchorLink>
          </div>
        </nav>
      </div>

      <Transition
        show={isExpanded}
        enter={"duration-150 ease-out"}
        enterFrom={"opacity-0 scale-95"}
        enterTo={"opacity-100 scale-100"}
        leave={"duration-100 ease-in"}
        leaveFrom={"opacity-100 scale-100"}
        leaveTo={"opacity-0 scale-95"}
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-md">
            <div className="rounded-lg bg-white shadow-xs overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="skollcoaching logo"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    onClick={() => toggleExpansion(false)}
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3">
                <a
                  href="https://pr.skollcoaching.com"
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                >
                  PR Tracker
                </a>
              </div>
              <div>
                <AnchorLink
                  to="/#coaching-inquiry"
                  className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                >
                  Coaching Anfrage
                </AnchorLink>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};

Header.propTypes = {
  center: PropTypes.bool,
};

export default Header;
