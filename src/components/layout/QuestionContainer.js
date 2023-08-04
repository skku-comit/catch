import { Link } from "react-router-dom";
import { useState } from "react";
// components
import QuestionNumber from "../common/QuestionNumber";
import TextLineBreaker from "../common/TextLineBreaker";
import QuestionImage from "../common/QuestionImage";
import QuestionButton from "../common/QuestionButton";

// css
import classes from "./QuestionContainer.module.css";

const QuestionContainer = ({
  Number,
  Problem,
  Image1,
  Image2,
  checkWrong,
  onGetAnswer,
}) => {
  const checkAnswerHandler = (userAnswer) => {
    onGetAnswer(userAnswer);
  };
  console.log(checkWrong);
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
        <QuestionNumber Number={Number} />
        <TextLineBreaker Problem={Problem} />
      </div>

      <QuestionImage Image1={Image1} Image2={Image2} />
      <QuestionButton onCheckAnswer={checkAnswerHandler} />
    </div>
  );
};

export default QuestionContainer;
