import React from "react";
// mt-8 border-t border-gray-200

// eslint-disable-next-line no-unused-vars
const questions = [
  {
    question: "Gibt es eine Mindestlaufzeit?",
    answer: `Wir arbeiten mindestens 4 Wochen zusammen.
    Das gibt uns Zeit uns gegenseitig kennenzulernen und herauszufinden, ob wir zusammenpassen.`,
  },
  {
    question: "Kann ich auch als kompletter Anfänger mit dir zusammenarbeiten?",
    answer: "Ja, natürlich.",
  },
  {
    question: "Wie oft kann ich dich kontaktieren, wenn ich Fragen habe?",
    answer:
      "Beim 24/7 Coaching kannst du mir jederzeit schreiben und ich versuche dir sobald es geht zu antworten.",
  },
  {
    question: "Was passiert, wenn ich mitten im Block krank werde?",
    answer:
      "Kein Problem. Kurier dich aus und sobald du wieder fit bist, passen wir deinen Plan an und machen weiter.",
  },
  {
    question: "Bekomme ich von dir Ernährungspläne?",
    answer:
      "Nein. Ich bin kein großer Fan davon dir exakt vorzuschreiben, was und wieviel du essen sollst. Viel mehr möchte ich dir das Wissen vermitteln, dich selbst zielgerichtet zu ernähren.",
  },
  {
    question: "Welche Zahlungsmethoden bietest du an?",
    answer: "PayPal oder Überweisung.",
  },
  {
    question: "Bietest du auch Personal Training an?",
    answer:
      "Falls du im Raum Unterschleißheim wohnst, können wir uns gerne darüber unterhalten. Schreib mir!",
  },
];

const FAQ = () => {
  return (
    <div className="bg-gray-50 shadow-inner">
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
                  className={`${i === 0 ||
                    "mt-8 border-t border-gray-200 "}pt-6 md:grid md:grid-cols-12 md:gap-8`}
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
