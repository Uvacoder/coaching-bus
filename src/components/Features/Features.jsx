import React from "react";
import Feature from "./Feature";

const Features = () => {
  // eslint-disable-next-line no-unused-vars
  const feats = [
    {
      title: "Trainingsplanung",
      text: `Individuell auf dich zugeschnitten - abhängig von deinem Alltag, deinem derzeitigen Trainingsstand,
      deinen Zielen und deinen Trainingsmöglichkeiten.`
    },
    {
      title: "Kommunikation",
      text: `Wir halten ständig Kontakt und können so auf Änderungen schnell reagieren. Auch bei Fragen und Sorgen kannst du mir jederzeit schreiben.`
    },
    {
      title: "Ernährungscoaching",
      text: `Keine starren Ernährungspläne - stattdessen eignest du dir
    Gewohnheiten an, die dir auch langfristig dabei helfen, dich besser
    zu ernähren. Ein Mix aus den neuesten wissenschaftlichen
    Erkenntnissen der Ernährungswissenschaft und der
    Verhaltenspsychologie.`
    },
    {
      title: "Ernährungscoaching",
      text: `Keine starren Ernährungspläne - stattdessen eignest du dir
    Gewohnheiten an, die dir auch langfristig dabei helfen, dich besser
    zu ernähren. Ein Mix aus den neuesten wissenschaftlichen
    Erkenntnissen der Ernährungswissenschaft und der
    Verhaltenspsychologie.`
    }
  ];
  return (
    <div className="bg-white">
      <div className="py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Online coaching
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Was dich erwartet
            </h3>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
          <div className="mt-10">
            <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
              {feats.map(feat => (
                <Feature key={feat.title} {...feat} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
