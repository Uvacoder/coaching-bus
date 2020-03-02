import React from "react";
import PropTypes from "prop-types";

const Feature = props => {
  return (
    <li className="mt-10 md:mt-0">
      <div className="flex">
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
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
                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
              />
            </svg>
          </div>
        </div>
        <div className="ml-4">
          <h5 className="text-lg leading-6 font-medium text-gray-900">
            {props.title}
          </h5>
          <p className="mt-2 text-base leading-6 text-gray-500">{props.text}</p>
        </div>
      </div>
    </li>
  );
};

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.any
};

export default Feature;
