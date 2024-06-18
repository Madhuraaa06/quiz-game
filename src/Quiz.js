import React, { useState } from 'react';
import './quiz.css'; // Import your CSS file

const Quiz = () => {
  const questions = [
    {
      question: "Which gas do plants primarily absorb from the atmosphere during photosynthesis?",
      options: [
        { text: "Oxygen", isCorrect: false },
        { text: "Nitrogen", isCorrect: false },
        { text: "Carbon dioxide", isCorrect: true },
        { text: "Hydrogen", isCorrect: false }
      ]
    },
    {
      question: "Which gas do plants primarily release during photosynthesis?",
      options: [
        { text: "Oxygen", isCorrect: true },
        { text: "Nitrogen", isCorrect: false },
        { text: "Carbon dioxide", isCorrect: false },
        { text: "Hydrogen", isCorrect: false }
      ]
    },
    {
      question: "What is the chemical symbol for the element gold?",
      options: [
        { text: "Go", isCorrect: false },
        { text: "Au", isCorrect: true },
        { text: "Gl", isCorrect: false },
        { text: "O", isCorrect: false }
      ]
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: [
        { text: "Venus", isCorrect: false },
        { text: "Mars", isCorrect: true },
        { text: "Jupiter", isCorrect: false },
        { text: "Saturn", isCorrect: false }
      ]
    },
    {
      question: "What is the largest mammal on Earth?",
      options: [
        { text: "Blue whale", isCorrect: true },
        { text: "African elephant", isCorrect: false },
        { text: "Giraffe", isCorrect: false },
        { text: "Hippopotamus", isCorrect: false }
      ]
    },
    {
      question: "What is the process by which plants make their own food using sunlight?",
      options: [
        { text: "Transpiration", isCorrect: false },
        { text: "Respiration", isCorrect: false },
        { text: "Photosynthesis", isCorrect: true },
        { text: "Fermentation", isCorrect: false }
      ]
    },
    {
      question: "What is the process by which water evaporates from plant leaves?",
      options: [
        { text: "Transpiration", isCorrect: true },
        { text: "Condensation", isCorrect: false },
        { text: "Precipitation", isCorrect: false },
        { text: "Infiltration", isCorrect: false }
      ]
    },
    {
      question: "Which mammal is known for its ability to fly?",
      options: [
        { text: "Bat", isCorrect: true },
        { text: "Squirrel", isCorrect: false },
        { text: "Mouse", isCorrect: false },
        { text: "Kangaroo", isCorrect: false }
      ]
    },
    {
      question: "What is the largest living land animal on Earth?",
      options: [
        { text: "Giraffe", isCorrect: false },
        { text: "African elephant", isCorrect: true },
        { text: "Rhinoceros", isCorrect: false },
        { text: "Hippopotamus", isCorrect: false }
      ]
    },
    {
      question: "Which of the following is a deciduous tree that produces colorful leaves in the fall?",
      options: [
        { text: "Pine", isCorrect: false },
        { text: "Palm", isCorrect: false },
        { text: "Maple", isCorrect: true },
        { text: "Spruce", isCorrect: false }
      ]
    }
  ];
 
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [optionSelected, setOptionSelected] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerClick = (isCorrect, index) => {
    if (!optionSelected) {
      setOptionSelected(true);
      if (isCorrect) {
        setScore(score + 1);
      }
    }
  };

  const nextQuestion = () => {
    setOptionSelected(false);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setQuestionIndex(0);
    setScore(0);
    setOptionSelected(false);
    setQuizCompleted(false);
  };

  return (
    <div className="app">
      <div className="box">
        <h2>QUIZ GAME</h2>
        {!quizCompleted && (
          <>
            <h3>{questions[questionIndex].question}</h3>
            <div className="options">
              {questions[questionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className="option"
                  onClick={() => handleAnswerClick(option.isCorrect, index)}
                  style={{
                    backgroundColor: optionSelected && option.isCorrect ? '#4caf50' : optionSelected 
                  }}
                >
                  {option.text}
                </button>
              ))}
            </div>
            {/* {optionSelected && (
            //   <p className="score">Score: {score}</p>
            )} */}
            <button className="nextb" onClick={nextQuestion}>
              {questionIndex < questions.length - 1 ? 'Next' : 'Finish'}
            </button>
          </>
        )}
        {quizCompleted && (
          <>
            <h3>Quiz completed. Thank you for playing!</h3>
            <p className="final-score">Your score: {score}</p>
            <button className="restart" onClick={resetQuiz}>Restart Quiz</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;