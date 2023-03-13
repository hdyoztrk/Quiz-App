import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:difficulty/:amount" element={<Quiz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
