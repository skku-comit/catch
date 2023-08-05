import { Link } from "react-router-dom";
import { useState } from "react";
// components
import QuestionNumber from "../common/QuestionNumber";
import QuestionText from "../common/QuestionText";
import QuestionImage from "../common/QuestionImage";
import QuestionButton from "../common/QuestionButton";

// css
import classes from "./QuestionContainer.module.css";

const QuestionContainer = ({
  Number,
  Problem,
  Image1,
  Image2,
  answer,
  checkWrong,
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
        }`}
      >
        {checkWrong === "" && <div className={classes["triangle"]}></div>}
        <QuestionNumber Number={Number} checkDone={checkWrong} />
        <QuestionText Problem={Problem} checkDone={checkWrong} />
      </div>

      <QuestionImage
        Image1={Image1}
        Image2={Image2}
        answer={answer}
        checkDone={checkWrong}
      />
      <QuestionButton onCheckAnswer={checkAnswerHandler} />
    </div>
  );
};

export default QuestionContainer;
