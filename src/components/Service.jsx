import React from "react";
import PropTypes from "prop-types";

const Service = props => {
  return props.even ? (
    <div className="flex flex-wrap mb-16">
      <div className="w-5/6 sm:w-1/2 p-6">
        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
          {props.name}
        </h3>
        <p className="text-gray-700 mb-8">{props.description}</p>
      </div>
      <div className="w-full sm:w-1/2 p-6">
        <img src={props.svg}></img>
      </div>
    </div>
  ) : (
    <div className="flex flex-wrap flex-col-reverse sm:flex-row mb-16">
      <div className="w-full sm:w-1/2 p-6 mt-6">
        <img src={props.svg}></img>
      </div>
      <div className="w-full sm:w-1/2 p-6 mt-6">
        <div className="align-middle">
          <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
            {props.name}
          </h3>
          <p className="text-gray-700 mb-8">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
Service.propTypes = {
  even: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  svg: PropTypes.any.isRequired
};

export default Service;
