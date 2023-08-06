//imports
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//css
import classes from "./QuestionButton.module.css";

const QuestionButton = ({ onCheckAnswer }) => {
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
        className={`${classes.link} ${classes["correct-link"]} `}
        onClick={AclickHandler}
      />
      <button
        className={`${classes.link} ${classes["wrong-link"]}`}
        onClick={BclickHandler}
      />
    </div>
  );
};

export default QuestionButton;
