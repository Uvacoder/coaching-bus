import React from "react";
// mt-8 border-t border-gray-200

// eslint-disable-next-line no-unused-vars
const questions = [
  {
    question: "How old are you?",
    answer: 23
  },
  {
    question: "Do you like me?",
    answer: "Yes"
  }
];

const FAQ = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          Häufige Fragen
        </h2>
        <div className="mt-6 border-t-2 border-gray-200 pt-6">
          <dl>
            {questions.map(({ question, answer }, i) => {
              return (
                <div
                  key={question}
                  className={`${
                    i !== 0 ? "mt-8 border-t border-gray-200 " : ""
                  }pt-6 md:grid md:grid-cols-12 md:gap-8`}
                >
                  <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">
                    {question}
                  </dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7">
                    <p className="text-base leading-6 text-gray-500">
                      {answer}
                    </p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
