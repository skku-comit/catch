// Recoil
import { media_version } from "./data/atom";
import { useRecoilState } from "recoil";
// React-Responsive
import { useMediaQuery } from "react-responsive";
// Framer-Motion
import { AnimatePresence } from "framer-motion";
// imports
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// pages
import StartPage from "./pages/StartPage";
import QuestionPage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage";
import Level from "./data/level";

function App() {
  const [curExp, setCurExp] = useState(0);
  const location = useLocation();
  // React-Responsive
  const [version, setVersion] = useRecoilState(media_version);
  const PC = useMediaQuery({
    query: "(min-width:1025px)",
  });
  const TABLET = useMediaQuery({
    query: "(min-width:768px) and (max-width:1024px)",
  });
  const MOBILE = useMediaQuery({
    query: "(max-width:767px)",
  });
  useEffect(() => {
    setVersion(PC ? "PC" : TABLET ? "TABLET" : "MOBILE");
  }, [PC, TABLET, MOBILE]);
  useEffect(() => {
    console.log(version);
  }, [version]);

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
