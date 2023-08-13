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

const Question5Page = () => {
  const [isCorrect, setIsCorrect] = useState("");
  const [isQuestionStart, setIsQuestionStart] = useState();
  const [isAnswered, setIsAnswered] = useState(false);
  const [openAnswerpage, setOpenAnswerPage] = useState(false); // answer page

  // level context
  const curExpContext = useContext(Level);
  const setCurExpIncrease = () => {
    curExpContext.setExp((current) => {
      return current + 1;
    });
  };

  const answerHandler = (userAnswer) => {
    setIsAnswered(true);
    if (questionData.questions[4].answer === userAnswer) {
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

  return (
    <div className={classes["page"]}>
      <ImageContainer
        isAnswered={isAnswered}
        isStart={isQuestionStart}
        setOpenAnswerPage={setOpenAnswerPage}
        Number={questionData.questions[4].id}
        Citizen={questionData.questions[4].characterImage}
      />
      <QuestionContainer
        Number={questionData.questions[4].id}
        Problem={questionData.questions[4].problem}
        Explain={questionData.questions[4].explanation}
        Image1={questionData.questions[4].image1}
        Image2={questionData.questions[4].image2}
        answer={questionData.questions[4].answer}
        checkAnswer={isCorrect}
        checkFinished={openAnswerpage}
        onGetAnswer={answerHandler}
      />
      {isCorrect !== "" && (
        <ThrowFish checkAnswer={isCorrect} onChangePage={pageHandler} />
      )}

      {openAnswerpage && <div className={classes["backdrop"]} />}
    </div>
  );
};

export default Question5Page;
