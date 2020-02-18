import React from "react";
import Service from "./Service.jsx";
import goals from "../images/goals.svg";
import food from "../images/food.svg";
import feedback from "../images/feedback.svg";

const serv = [
  {
    name: "Individuelle Trainingsplanung",
    description: `Wir planen dein Training individuell auf dich abgestimmt - abhängig von deine Zielen,
      deinem Alltag, dem Equipment das dir zur Verfügung steht und vielen anderen Faktoren.
      Dabei benutzen wir wissenschaftlich fundierte Trainingsmethoden `,
    svg: goals
  },
  {
    name: "Ernährungscoaching",
    description: "foo bla bla",
    svg: food
  },
  {
    name: "Kontinuierliches Feedback",
    description: "foo bla bla",
    svg: feedback
  }
];
const Services = () => {
  let counter = 0;
  return (
    <section className="bg-white py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          So funktioniert das Coaching
        </h1>
        <div className="w-full mb-12">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        {serv.map(v => {
          const even = counter++ % 2 === 0;
          return <Service key={v.name} even={even} {...v}></Service>;
        })}
      </div>
    </section>
  );
};

export default Services;
