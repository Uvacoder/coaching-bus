import React from "react";

const CoachingInquiry = () => {
  return (
    <form className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          Coaching Anfrage
        </h2>
        <p className="mt-2 max-w-2xl text-base leading-5 text-gray-500">
          Je mehr Details desto besser. Ich melde mich bald bei dir!
        </p>
      </div>
      <div className="mt-6 sm:mt-5">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
          >
            Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="max-w-xs rounded-md shadow-sm">
              <input
                id="name"
                name="name"
                placeholder="Max Mustermann"
                className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-5">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Email
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-xs rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  placeholder="m.mustermann@example.de"
                  className="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="general"
            className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
          >
            Allgemeine Informationen
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="max-w-lg flex rounded-md shadow-sm">
              <textarea
                id="general"
                name="general"
                rows={3}
                className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">Alter, Gewicht etc.</p>
          </div>
        </div>

        <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="goals"
            className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
          >
            Was ist dein Ziel?
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <div className="max-w-lg flex rounded-md shadow-sm">
              <textarea
                id="goals"
                name="goals"
                rows={3}
                className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-5">
        <div className="flex justify-end">
          <span className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >
              <svg
                className="-ml-1 mr-3 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  clipRule="evenodd"
                />
              </svg>
              Senden
            </button>
          </span>
        </div>
      </div>
    </form>
  );
};

export default CoachingInquiry;
