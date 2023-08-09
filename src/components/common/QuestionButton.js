//imports
import { useState, useEffect } from "react";
//css
import classes from "./QuestionButton.module.css";

const QuestionButton = ({ answer, checkDone, onCheckAnswer }) => {
  const [userAnswer, setUserAnswer] = useState("initial");
  useEffect(() => {
    if (userAnswer !== "initial") onCheckAnswer(userAnswer);
  }, [userAnswer]);

  const AclickHandler = () => {
    setUserAnswer("A");
  };
  const BclickHandler = () => {
    setUserAnswer("B");
  };

  return (
    <div className={classes["button-container"]}>
      <button
        className={`${classes.button} ${classes["defaultA-button"]} ${
          answer === "B" && checkDone !== "" && classes.done
        }`}
        onClick={AclickHandler}
      />
      <button
        className={`${classes.button} ${classes["defaultB-button"]} ${
          answer === "A" && checkDone !== "" && classes.done
        }`}
        onClick={BclickHandler}
      />
    </div>
  );
};

export default QuestionButton;
