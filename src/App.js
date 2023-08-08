// imports
import { Routes, Route } from "react-router-dom";

// pages
import StartPage from "./pages/StartPage";
import Question1Page from "./pages/Question1Page";
import Question2Page from "./pages/Question2Page";
import Question3Page from "./pages/Question3Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/q1" element={<Question1Page />} />
      <Route path="/q2" element={<Question2Page />} />
      <Route path="/q1/q2/q3" element={<Question3Page />} />
    </Routes>
  );
}

export default App;
