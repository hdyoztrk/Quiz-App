import React, { useEffect, useState } from "react";
import "./Card.css";

function Card({
  questionsData,
  score,
  setScore,
  count,
  setCount,
  setDuration,
}) {
  const [timer, setTimer] = useState(20);
  const approvedChoice = (e) => {
    const checkAnswer =
      e.currentTarget.value === questionsData[count]?.correct_answer;
    console.log(checkAnswer);
    if (checkAnswer) {
      setScore(score + 10);
    }
    setCount(count + 1);
    if (count === 9) setDuration(true);
    setTimer(20);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 0 && count < 10) {
        setCount(count + 1);
        setTimer(20);
      } else if (count >= 10) {
        setDuration(true);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className="card">
      <div className="timer">{timer}</div>
      <div className="title">
        <div className="text">
          {count + 1}/10 - {questionsData[count]?.question}
        </div>
        {questionsData[count]?.answers?.map((answer, i) => (
          <button onClick={approvedChoice} key={i} value={answer}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Card;
