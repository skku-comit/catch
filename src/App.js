// imports
import { Routes, Route } from "react-router-dom";

// pages
import StartPage from "./pages/StartPage";
import Question1Page from './pages/QuestionPages/Question1Page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/q1-page" element={< Question1Page/>} />
    </Routes>
  );
}

export default App;
