import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Quiz.css";
import * as api from "../../api/api";
import Card from "../../components/card/Card";
import Modal from "../../components/modal/Modal";
function Quiz() {
  const { difficulty, amount } = useParams();
  const [questionsData, setquestionsData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await api.quizData(difficulty, amount);
      setquestionsData(data);
    };
    getData();
  }, []);
  console.log(questionsData);

  return (
    <div className="quiz">
      {duration ? (
        <Modal score={score} />
      ) : (
        <Card
          questionsData={questionsData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          setDuration={setDuration}
        />
      )}
    </div>
  );
}

export default Quiz;
