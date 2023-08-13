import { motion } from "framer-motion";
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

  //animation variant
  const buttonVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.15,
        delay: 0.25,
      },
    },
  };

  return (
    <div className={classes["button-container"]}>
      <motion.button
        className={`${classes.button} ${classes["defaultA-button"]} ${
          checkDone !== "" && classes.done
        }`}
        onClick={AclickHandler}
        variants={buttonVariant}
      />
      <motion.button
        className={`${classes.button} ${classes["defaultB-button"]} ${
          checkDone !== "" && classes.done
        }`}
        onClick={BclickHandler}
        variants={buttonVariant}
      />
    </div>
  );
};

export default QuestionButton;
