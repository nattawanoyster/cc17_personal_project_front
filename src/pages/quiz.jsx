import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../features/authentication/components/Navbar";

const questions = [
  {
    question: "What year did Red Velvet debut?",
    options: ["2012", "2013", "2014", "2015"],
    answer: "2014",
  },
  {
    question: "Which member is the leader of aespa?",
    options: ["Karina", "Giselle", "Winter", "Ningning"],
    answer: "Karina",
  },
  {
    question: "What is the title of Red Velvet's debut song?",
    options: ["Happiness", "Ice Cream Cake", "Red Flavor", "Psycho"],
    answer: "Happiness",
  },
  {
    question: "Which aespa song mentions 'Black Mamba'?",
    options: ["Next Level", "Savage", "Black Mamba", "Forever"],
    answer: "Black Mamba",
  },
  {
    question: "What is the title song for Red Velvet 10th anniversary?",
    options: ["Chill Kill", "Cosmic", "Birthday", "Feel My Rhythm"],
    answer: "Cosmic",
  },
  {
    question: "What is the fandom name of aespa?",
    options: ["Reveluv", "MY", "Once", "Blink"],
    answer: "MY",
  },
  {
    question: "Which Red Velvet song features a velvet concept?",
    options: ["Dumb Dumb", "Russian Roulette", "Bad Boy", "Zimzalabim"],
    answer: "Bad Boy",
  },
  {
    question: "What is the title of aespa's debut song?",
    options: ["Next Level", "Savage", "Black Mamba", "Forever"],
    answer: "Black Mamba",
  },
  {
    question: "Which Red Velvet member is known for her powerful vocals?",
    options: ["Irene", "Seulgi", "Wendy", "Joy", "Yeri"],
    answer: "Wendy",
  },
  {
    question: "What year did aespa debut?",
    options: ["2018", "2019", "2020", "2021"],
    answer: "2020",
  },
];

const FanQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState([]);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    } else {
      setWrongAnswers([
        ...wrongAnswers,
        {
          question: questions[currentQuestion].question,
          correctAnswer: questions[currentQuestion].answer,
        },
      ]);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setWrongAnswers([]);
  };

  return (
    <div>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-violet-200 to-pink-200 p-4">
        <h1 className="text-3xl font-bold mb-8">Fan Quiz</h1>
        {showScore ? (
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">
              You scored {score} out of {questions.length}!
            </h2>
            {wrongAnswers.length > 0 && (
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">Incorrect Answers:</h3>
                <ul className="list-disc list-inside">
                  {wrongAnswers.map((item, index) => (
                    <li key={index}>
                      <strong>{item.question}</strong>
                      <br />
                      Correct Answer: {item.correctAnswer}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex justify-center space-x-4 mt-4">
              <button
                className="bg-gradient-to-r from-blue-200 to-cyan-200 text-white py-2 px-4 rounded-lg"
                onClick={handleRestartQuiz}
              >
                Restart Quiz
              </button>
              <Link
                to="/home-redvelvet"
                className="bg-gray-500 text-white py-2 px-4 rounded-lg"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-4">
                {questions[currentQuestion].question}
              </h2>
              <div className="flex flex-col">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="bg-gradient-to-r from-blue-200 to-cyan-200 text-gray-700 py-2 px-4 rounded-lg mb-2 transition-transform transform hover:scale-105"
                    onClick={() => handleAnswerOptionClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FanQuiz;
