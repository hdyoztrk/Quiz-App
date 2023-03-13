import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/dropdown/Dropdown";
import "./Home.css";

const Home = () => {
  const difficulty = ["choose difficulty level", "easy", "medium", "hard"];
  const navigate = useNavigate();
  const [change, setChange] = useState("");
  const max_question = 10;

  const startQuiz = () => {
    if (change && change !== "choose difficulty level") {
      navigate(`/quiz/${change}/${max_question}`);
    }
  };

  return (
    <div className="home">
      <div className="home-container">
        <Dropdown data={difficulty} setChange={setChange} />
        <div onClick={startQuiz} className="home-btn">
          Start Quiz
        </div>
      </div>
    </div>
  );
};

export default Home;
