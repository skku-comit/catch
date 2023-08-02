// imports
import { Routes, Route } from "react-router-dom";

// pages
import StartPage from "./pages/StartPage";
import Question1Page from "./pages/Question1Page";
import AnswerPage from "./pages/AnswerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/q1" element={<Question1Page />} />
      <Route path="/q1/ans" element={<AnswerPage />} />
    </Routes>
  );
}

export default App;
