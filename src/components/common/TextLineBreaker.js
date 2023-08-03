//css
import classes from "./TextLineBreaker.module.css";
//imports
import React from "react";

const TextLineBreaker = ({ Problem }) => {
  const lines = Problem.split("\n");
  return (
    <div className={classes["Problem-text"]}>
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default TextLineBreaker;
