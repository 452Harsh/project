import React from 'react';

const Result = ({ questions, answers }) => (
  <div>
    <h2>Result</h2>
    <ul>
      {questions.map(question => (
        <li key={question.id}>
          <h3>{question.question}</h3>
          <p>Your Answer: {answers[question.id]}</p>
          <p>Correct Answer: {question.answer}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Result;
// import React, { useState } from 'react';
// import Result from './Result';

// const questions = [
//   {
//     id: 1,
//     question: 'What is the capital of India?',
//     options: ['New Delhi', 'Mumbai', 'Bengaluru', 'Chennai'],
//     answer: 'New Delhi'
//   },
//   {
//     id: 2,
//     question: 'What is the currency of India?',
//     options: ['Dollar', 'Rupee', 'Euro', 'Yen'],
//     answer: 'Rupee'
//   },
//   {
//     id: 3,
//     question: 'Who is the Prime Minister of India?',
//     options: ['Narendra Modi', 'Manmohan Singh', 'Rajiv Gandhi', 'Atal Bihari Vajpayee'],
//     answer: 'Narendra Modi'
//   },
//   {
//     id: 4,
//     question: 'What is the National Anthem of India?',
//     options: ['Vande Mataram', 'Jana Gana Mana', 'Saare Jahan Se Achha', 'Qaumi Tarana'],
//     answer: 'Jana Gana Mana'
//   }
// ];

// const Quiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [showResults, setShowResults] = useState(false);

//   const handleOptionClick = (e) => {
//     setAnswers({
//       ...answers,
//       [questions[currentQuestion].id]: e.target.value
//     });
//   };

//   const handleNextClick = () => {
//     setCurrentQuestion(currentQuestion + 1);
//   };

//   const handlePrevClick = () => {
//     setCurrentQuestion(currentQuestion - 1);
//   };

//   const handleSubmitClick = () => {
//     setShowResults(true);
//   };

//   if (showResults) {
//     return <Result questions={questions} answers={answers} />;
//   }

//   return (
//     <div>
//       <h3>{questions[currentQuestion].question}</h3>
//       <ul>
//         {questions[currentQuestion].options.map(option => (
//           <li key={option}>
//             <input
//               type="radio"
//               value={option}
//               onClick={handleOptionClick}
//               checked={answers[questions[currentQuestion].id] === option}
//             />
//             {option}
//           </li>
//         ))}
//       </ul>
//       <button disabled={currentQuestion === 0} onClick={handlePrevClick}>
//         Prev
//       </button>
//       <button disabled={currentQuestion === questions.length - 1} onClick={handleNextClick}>
//         Next
//       </button>
//       <button
//         disabled={currentQuestion !== questions.length - 1}
//         onClick={handleSubmitClick}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Quiz;
