import React, { useState } from "react";
import questions from "./question";
import "./input.css";
const Mock = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({});
  const [submit,setsubmit] = useState(false);
  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };
  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };
  const handleQuestionClick = (questionId) => {
    setCurrentQuestion(questionId);
  };
  const handleSubmit = () => {
    setsubmit(true);
  };
  

  console.log(answers);


  return (

    <div>
    {submit ? (
      <div>Result  </div>
    ) : (<div className="bg-white">
      <div className=" flex ">
        <div className="w-3/4 h-12">
          <div className="UpperSection">
            <div className="flex bg-gray-200 place-content-center ">
              <h4 className="py-3 ">Online Test-CAT Preparation</h4>
            </div>
            <h3 className="py-3 pl-20">Question {currentQuestion}</h3>
            <p className="pl-20 mb-2">{questions[currentQuestion - 1].text}</p>
            <div className="pl-20">
              {questions[currentQuestion - 1].options.map((option) => (
                <div key={option}>
                  <input
                    type="checkbox"
                    onClick={() => handleAnswer(currentQuestion, option)}
                    checked={answers[currentQuestion] === option}
                  />
                  <span className="pl-2">{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{marginTop:470}} className="LowerSection flex pl-20 py-4 bg-gray-200 border-2 border-gray-300">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Mark for review</button>
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 1}
              className="ml-10 w-24 h-18 rounded-tl-full rounded-bl-full bg-blue-500  text-white font-bold py-2 px-2"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentQuestion === questions.length}
              className="ml-2 w-24 h-18 rounded-tr-full rounded-br-full bg-blue-500  text-white font-bold py-2 px-4"
            >
              Next
            </button>
            <button onClick={handleSubmit} className="ml-96 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
              Submit Test
            </button>
          </div>
          <div className="flex pl-4 bg-gray-200   border-gray-300">
            <ul className="flex px-3 py-3">
                <li className="px-16">current</li>
                <li className="px-16">Not attempted</li>
                <li className="px-16">Attempted</li>
                <li className="px-16">Not Answered</li>
                <li className="px-16">Review</li>
            </ul>
          </div>
          <div> <p>
        Result:{" "}
        {answers[currentQuestion]
          ? answers[currentQuestion] === questions[currentQuestion - 1].answer
            ? "Correct"
            : "Incorrect"
          : "Not Answered"}
      </p> 
</div>
        </div>
        <div className=" w-1/4 h-12 ">
          <div>
            <div className="flex place-content-center  py-3 bg-gray-300 ">
              <h4>Time Left</h4>
            </div>
            <div className="flex flex-col items-center bg-gray-100">
              <p className="py-3 text-xl">00:42:39</p>
              <p className="pb-3 text-xl">Hours:Minutes:Seconds</p>
            </div>
          </div>
          <div className="flex-col  bg-gray-100 min-h-screen">
            <div className="flex place-content-center  py-3 mb-2 bg-gray-300 ">
              <h4>QUESTION</h4>
            </div>
            <div className="flex flex-wrap">
              {questions.map((question) => (
                <div className="px-3 py-2" key={question.id}>
                  <button
                    className="h-8 w-8 border-2 border-black rounded-tl-lg"
                    style={{
                      backgroundColor: answers[question.id]
                      ? answers[question.id] === questions[question.id - 1].answer
                        ? "red"
                        : "red"
                      : "green",
                    }}
                    onClick={() => handleQuestionClick(question.id)}
                  >
                    <span className="text-white">{question.id}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>)}</div>
  );
};
export default Mock;

  