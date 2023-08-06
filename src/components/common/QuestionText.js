import React, { useEffect, useState } from "react";
//css
import classes from "./QuestionText.module.css";
//imports
import TypingText from "../dynamic/TypingText";
import TypingAnswer from "../dynamic/TypingAnswer";

const QuestionText = ({ Problem, Explain, checkDone, checkFinished }) => {
  return (
    <div
      className={`${classes["problem-text"]} ${
        checkDone !== "" && classes.done
      } ${checkFinished && classes.answer}
      }`}
    >
      {!checkFinished ? (
        <TypingText text={Problem} />
      ) : (
        <TypingAnswer text={Explain} />
      )}
    </div>
  );
};

export default QuestionText;
