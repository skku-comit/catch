// imports
import { Routes, Route } from "react-router-dom";

// pages
import StartPage from './pages/StartPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="*" element={<p>Path not resolved</p>} />
    </Routes>
  );
}

export default App;
