
import React, { useState } from 'react';
import './Quiz.css'; 

function Quiz({ onQuizComplete }) {
  const [answers, setAnswers] = useState({});
  const questions = [
    { id: 1, question: "When was India won thier First Cricket World Cup ?", choices: [1999,1980,1973,1983], correct: 1983 },
    { id: 2, question: "What is the capital of France?", choices: ["Berlin", "Madrid", "Paris", "Rome"], correct: "Paris" },
    {id:3, question: "Who was The Prime Mininster Of India?", choices: ["Rahul Gandhi","Manoj","M.K.Stalin","Modi"], correct: "Modi"}
  ];

  const handleChoiceClick = (questionId, choice) => {
    setAnswers({ ...answers, [questionId]: choice });
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correct) {
        score++;
      }
    });
    onQuizComplete(`Your score is ${score} out of ${questions.length}`);
  };

  return (
    <div>
      {questions.map(q => (
        <div key={q.id} className="question">
          <p>{q.question}</p>
          {q.choices.map(choice => (
            <button
              key={choice}
              onClick={() => handleChoiceClick(q.id, choice)}
              className={answers[q.id] === choice ? 'selected' : ''}
            >
              {choice}
            </button>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Quiz;
