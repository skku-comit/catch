import React, { useEffect, useState } from "react";
//css
import classes from "./QuestionText.module.css";
//imports
import TypingText from "../dynamic/TypingText";
import TypingAnswer from "../dynamic/TypingAnswer";

const QuestionText = ({ Problem, Explain, checkDone, checkFinished }) => {
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setDelay(true);
    }, 1300);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div
      className={`${classes["problem-text"]} ${
        checkDone !== "" && classes.done
      } ${checkFinished && classes.answer}
      }`}
    >
      {delay && (
        <>
          {!checkFinished ? (
            <TypingText text={Problem} />
          ) : (
            <TypingAnswer text={Explain} />
          )}
        </>
      )}
    </div>
  );
};

export default QuestionText;
