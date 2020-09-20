import React from "react";

// eslint-disable-next-line max-lines-per-function
const Pricing = () => {
  return (
    <div className="bg-gray-900">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:max-w-none">
            <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
              Preise
            </h2>
            <p className="mt-2 text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
              Bring dein Training auf das nächste Level
            </p>
            <p className="mt-2 text-xl leading-7 text-gray-300">
              Entscheide selbst wieviel Unterstützung du brauchst - gerade am
              Anfang lohnt sich oft eine intensivere Zusammenarbeit.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-white sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900" />
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5">
              <div className="rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600">
                      Wöchentliche Check-Ins
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                    89€
                    <span className="ml-1 text-2xl leading-8 font-medium text-gray-500">
                      / Monat
                    </span>
                  </div>
                  <p className="mt-5 text-lg leading-7 text-gray-500">
                    In dieser Variante schickst du mir am Ende der
                    Trainingswoche Videos von deinen Grundübungen und
                    allgemeines Feedback, wie es dir geht.
                  </p>
                </div>
                <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                  <ul>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        Individuelle Trainingsplanung
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        Kommunikation über WhatsApp oder Email
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        Umfangreiches Erstgespräch
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        Ernährungsberatung
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        Technikfeedback
                      </p>
                    </li>
                  </ul>
                  <div className="mt-6 rounded-md shadow">
                    <a
                      href="#coaching-inquiry"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                    >
                      Anfragen
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg shadow-lg overflow-hidden lg:mt-0">
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div>
                    <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600">
                      24 / 7 Coaching
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline text-6xl leading-none font-extrabold">
                    119€
                    <span className="ml-1 text-2xl leading-8 font-medium text-gray-500">
                      / Monat
                    </span>
                  </div>
                  <p className="mt-5 text-lg leading-7 text-gray-500">
                    Hier hast du jederzeit Zugriff auf mich bei Fragen und
                    Problemen. Nach jeder Einheit kannst du mir Videos schicken
                    und bekommst Feedback zu deiner Technik.
                  </p>
                </div>
                <div className="px-6 pt-6 pb-8 bg-gray-50 sm:p-10 sm:pt-6">
                  <ul>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        Alle Leistungen der Basisvariante
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        Maximal 24 Stunden Reaktionszeit
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        Kurzfristige Anpassungen des Plans
                      </p>
                    </li>
                    <li className="mt-4 flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base leading-6 text-gray-700">
                        Perfekt für den Einstieg
                      </p>
                    </li>
                    <li className="mt-4 items-start hidden lg:flex lg:invisible">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 rounded-md shadow">
                    <a
                      href="#coaching-inquiry"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                    >
                      Anfragen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-white text-gray-800">
                    Rabatt
                  </span>
                </div>
                <div className="mt-4 text-lg leading-7 text-gray-500">
                  Falls du Schüler oder Student bist, erhälst du einen
                  monatlichen Rabatt von
                  <strong className="font-semibold text-gray-900"> 10€</strong>.
                  Dafür brauche ich nur einen Nachweis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
