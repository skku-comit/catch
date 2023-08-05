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
      {/* {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))} */}
    </div>
  );
};

export default QuestionText;
