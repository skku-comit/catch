import { AnimatePresence } from "framer-motion";
// imports
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// pages
import StartPage from "./pages/StartPage";
import QuestionPage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage";
import Level from "./data/level";

function App() {
  const [curExp, setCurExp] = useState(0);
  const location = useLocation();
  return (
    <Level.Provider value={{ exp: curExp, setExp: setCurExp }}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<StartPage />} />
          <Route path="/q1" element={<QuestionPage pageNumber={1} />} />
          <Route path="/q2" element={<QuestionPage pageNumber={2} />} />
          <Route path="/q3" element={<QuestionPage pageNumber={3} />} />
          <Route path="/q4" element={<QuestionPage pageNumber={4} />} />
          <Route path="/q5" element={<QuestionPage pageNumber={5} />} />
          <Route path="/q6" element={<QuestionPage pageNumber={6} />} />
          <Route path="/q7" element={<QuestionPage pageNumber={7} />} />
          <Route path="/q8" element={<QuestionPage pageNumber={8} />} />
          <Route path="/q9" element={<QuestionPage pageNumber={9} />} />
          <Route path="/q10" element={<QuestionPage pageNumber={10} />} />
          <Route path="/q11" element={<QuestionPage pageNumber={11} />} />
          <Route path="/q12" element={<QuestionPage pageNumber={12} />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </AnimatePresence>
    </Level.Provider>
  );
}

export default App;
