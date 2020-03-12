import React from "react";
import training from "../../images/training.png";

// eslint-disable-next-line max-lines-per-function
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
    }
  ];
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="features-svg-pattern-squares-1"
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
          <rect
            width="404"
            height="784"
            fill="url(#features-svg-pattern-squares-1)"
          />
        </svg>

        <div className="relative">
          <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Was dich erwartet
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
            Individuell auf dich zugeschnittene Betreuung, in allen wichtigen
            Bereichen. Von professioneller Trainingsplanung bis hin zum
            Ernährungscoaching.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
              Individuelle Trainingsplanung
            </h4>
            <p className="mt-3 text-lg leading-7 text-gray-500" />

            <ul className="mt-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Angepasst auf deine Ziele
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Egal ob du ein Athlet bist der stärker, schneller und
                      explosiver werden möchte, oder einfach nur besser aussehen
                      möchtest. Das Training hilft dir deine Ziele zu erreichen.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Flexibel
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Wir reagieren auf deine Umstände im Alltag und das
                      Equipment das dir zur Verfügung steht. So kriegst du stets
                      das optimale Training für deine Situation.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
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
                      Ernährung
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Keine starren Ernährungspläne - stattdessen eignest du dir
                      Gewohnheiten an, die dir auch langfristig dabei helfen,
                      dich besser zu ernähren. Ein Mix aus den neuesten
                      wissenschaftlichen Erkenntnissen der
                      Ernährungswissenschaft und der Verhaltenspsychologie.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width="784"
              height="404"
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="features-svg-pattern-squares-2"
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
              <rect
                width="784"
                height="404"
                fill="url(#features-svg-pattern-squares-2)"
              />
            </svg>
            <img
              className="relative mx-auto shadow-lg rounded-lg"
              width="490"
              src={training}
              alt=""
            />
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="features-svg-pattern-squares-3"
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
          <rect
            width="404"
            height="784"
            fill="url(#features-svg-pattern-squares-3)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                Kommunikation
              </h4>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                Offene und ehrliche Kommunikation ist ein wichtiger Grundpfeiler
                für unsere Zusammenarbeit.
              </p>

              <ul className="mt-10">
                <li>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        Intensive Betreuung
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Regelmäßiger Kontakt über WhatsApp oder Email ermöglicht
                        es uns, schnell auf Veränderungen zu reagieren und dein
                        Training anzupassen. Auch bei Fragen kannst du dich
                        jederzeit bei mir melden.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg leading-6 font-medium text-gray-900">
                        Technikfeedback
                      </h5>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        Du schickst mir regelmäßig Videos deiner Übungen. So
                        können wir über die Zeit deine Technik verbessern und
                        individuell auf deinen Körper anpassen.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <svg
                className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                width="784"
                height="404"
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="features-svg-pattern-squares-4"
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
                <rect
                  width="784"
                  height="404"
                  fill="url(#features-svg-pattern-squares-4)"
                />
              </svg>
              <img
                className="relative mx-auto"
                width="490"
                src="/img/features/feature-example-2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
