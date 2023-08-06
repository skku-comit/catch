import React from "react";
//css
import classes from "./QuestionText.module.css";
//imports
import TypingText from "../dynamic/TypingText";

const QuestionText = ({ Problem, checkDone }) => {
  return (
    <div
      className={`${classes["problem-text"]} ${
        checkDone !== "" && classes.done
      }`}
    >
      <TypingText text={Problem} />
    </div>
  );
};

export default QuestionText;
