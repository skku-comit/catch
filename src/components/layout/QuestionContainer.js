import { Link } from "react-router-dom";
import { useState } from "react";
// components
import QuestionNumber from "../common/QuestionNumber";
import QuestionText from "../common/QuestionText";
import QuestionImage from "../common/QuestionImage";
import QuestionButton from "../common/QuestionButton";

// css
import classes from "./QuestionContainer.module.css";
import NextButton from "../common/NextButton";

const QuestionContainer = ({
  Number,
  Problem,
  Explain,
  Image1,
  Image2,
  answer,
  checkWrong,
  checkFinished,
  onGetAnswer,
}) => {
  const checkAnswerHandler = (userAnswer) => {
    onGetAnswer(userAnswer);
  };

  return (
    <div className={classes["question-container"]}>
      <div
        className={`${classes["question-problem"]} ${
          checkWrong === ""
            ? ""
            : checkWrong === "true"
            ? classes.correct
            : classes.wrong
        } ${checkFinished && classes.done}`}
      >
        {checkWrong === "" && <div className={classes["triangle"]}></div>}
        <QuestionNumber Number={Number} checkDone={checkWrong} />
        <QuestionText
          Problem={Problem}
          Explain={Explain}
          checkDone={checkWrong}
          checkFinished={checkFinished}
        />
      </div>

      <QuestionImage
        Image1={Image1}
        Image2={Image2}
        answer={answer}
        checkDone={checkWrong}
      />
      {!checkFinished ? (
        <QuestionButton onCheckAnswer={checkAnswerHandler} />
      ) : (
        <NextButton />
      )}
    </div>
  );
};

export default QuestionContainer;
