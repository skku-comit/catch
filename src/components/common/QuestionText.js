//css
import classes from "./QuestionText.module.css";
//imports
import React, { useState, useEffect } from "react";

const QuestionText = ({ Problem, checkDone }) => {
  const lines = Problem.split("\n");
  return (
    <div
      className={`${classes["problem-text"]} ${
        checkDone !== "" && classes.done
      }`}
    >
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default QuestionText;
