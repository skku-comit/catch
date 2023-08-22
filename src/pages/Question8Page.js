import { motion } from "framer-motion";
// hooks
import { useState, useContext } from "react";

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

const Question8Page = () => {
  const [isCorrect, setIsCorrect] = useState("");
  const [isQuestionStart, setIsQuestionStart] = useState();
  const [isAnswered, setIsAnswered] = useState(false);
  const [openAnswerpage, setOpenAnswerPage] = useState(false); // answer page
  const [isTyped, setIsTyped] = useState(false); //typing done
  const [timeEnded, setTimeEnded] = useState(false); //timer end
  // level context
  const curExpContext = useContext(Level);
  const setCurExpIncrease = () => {
    curExpContext.setExp((current) => {
      return current + 1;
    });
  };

  const answerHandler = (userAnswer) => {
    setIsAnswered(true);
    if (questionData.questions[7].answer === userAnswer) {
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
        Number={questionData.questions[7].id}
        Citizen={questionData.questions[7].characterImage}
        checkTypingFinished={isTyped}
      />
      <QuestionContainer
        Number={questionData.questions[7].id}
        Problem={questionData.questions[7].problem}
        Explain={questionData.questions[7].explanation}
        Image1={questionData.questions[7].image1}
        Image2={questionData.questions[7].image2}
        answer={questionData.questions[7].answer}
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

export default Question8Page;
