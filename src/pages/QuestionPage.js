import { motion } from "framer-motion";
// hooks
import { useState, useContext, useEffect } from "react";

// css
import classes from "./QuestionPage.module.css";

// components
import QuestionContainer from "../components/layout/QuestionContainer";
import ImageContainer from "../components/layout/ImageContainer";
import ThrowFish from "../components/dynamic/ThrowFish";
// data
import questionData from "../data/data.json";
// context
import Level from "../data/level";

const QuestionPage = (props) => {
  const [isCorrect, setIsCorrect] = useState("");
  const [isQuestionStart, setIsQuestionStart] = useState();
  const [isAnswered, setIsAnswered] = useState(false);
  const [openAnswerpage, setOpenAnswerPage] = useState(false); // answer page
  const [isTyped, setIsTyped] = useState(false); //typing done
  const [timeEnded, setTimeEnded] = useState(false); //timer end
  // Page Number
  const pageNumber = props.pageNumber - 1;
  // level context
  const curExpContext = useContext(Level);
  const setCurExpIncrease = () => {
    curExpContext.setExp((current) => {
      return current + 1;
    });
  };

  const answerHandler = (userAnswer) => {
    setIsAnswered(true);
    if (questionData.questions[pageNumber].answer === userAnswer) {
      setIsCorrect("true");
      setCurExpIncrease();
      setIsQuestionStart(true);
    } else {
      setIsCorrect("false");
      setIsQuestionStart(false);
    }
  };

  const pageHandler = () => {
    setOpenAnswerPage(true);
  };

  const typingHandler = () => {
    setIsTyped(true);
  };

  const setTimeEnd = () => {
    setTimeEnded(true);
  };
  return (
    <motion.div
      style={{
        height: Math.min(window.innerHeight, (window.innerWidth * 4) / 3),
      }}
      className={classes["page"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0 }}
    >
      <ImageContainer
        isAnswered={isAnswered}
        isStart={isQuestionStart}
        setTimeEnd={setTimeEnd}
        Number={questionData.questions[pageNumber].id}
        Citizen={questionData.questions[pageNumber].characterImage}
        checkTypingFinished={isTyped}
      />
      <QuestionContainer
        Number={questionData.questions[pageNumber].id}
        Problem={questionData.questions[pageNumber].problem}
        Explain={questionData.questions[pageNumber].explanation}
        Image1={questionData.questions[pageNumber].image1}
        Image2={questionData.questions[pageNumber].image2}
        answer={questionData.questions[pageNumber].answer}
        checkAnswer={isCorrect}
        checkFinished={openAnswerpage}
        checkTimer={timeEnded}
        onGetAnswer={answerHandler}
        onSetTypingDone={typingHandler}
      />
      {(isCorrect !== "" || timeEnded) && (
        <ThrowFish checkAnswer={isCorrect} onChangePage={pageHandler} />
      )}

      {openAnswerpage && <div className={classes["backdrop"]} />}
    </motion.div>
  );
};

export default QuestionPage;
