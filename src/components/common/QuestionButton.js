import { motion } from "framer-motion";
//imports
import { useState, useEffect } from "react";
//css
import classes from "./QuestionButton.module.css";
//mp3
import useEffectSound from "./useEffectSound";
import effectSound from "../../assets/bgm/button-sound.mp3";

const QuestionButton = ({ checkAnswer, onCheckAnswer }) => {
  const [userAnswer, setUserAnswer] = useState("initial");
  const es = useEffectSound(effectSound, 1);

  useEffect(() => {
    if (userAnswer !== "initial") onCheckAnswer(userAnswer);
  }, [userAnswer]);

  const AclickHandler = () => {
    es.play();
    setUserAnswer("A");
  };
  const BclickHandler = () => {
    es.play();
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
        className={`${classes.button} ${classes["defaultA-button"]} 
        ${userAnswer === "A" && checkAnswer === "true" && classes.ACorrect}
        ${userAnswer === "B" && checkAnswer === "false" && classes.AWrong}
        ${userAnswer === "A" && checkAnswer === "false" && classes.AShade}
        ${userAnswer === "B" && checkAnswer === "true" && classes.AShade}
        ${checkAnswer !== "" && classes.done}
        `}
        onClick={AclickHandler}
        variants={buttonVariant}
      />
      <motion.button
        className={`${classes.button} ${classes["defaultB-button"]} 
        ${userAnswer === "B" && checkAnswer === "true" && classes.BCorrect}
        ${userAnswer === "A" && checkAnswer === "false" && classes.BWrong}
        ${userAnswer === "B" && checkAnswer === "false" && classes.BShade}
        ${userAnswer === "A" && checkAnswer === "true" && classes.BShade}
        ${checkAnswer !== "" && classes.done}
        `}
        onClick={BclickHandler}
        variants={buttonVariant}
      />
    </div>
  );
};

export default QuestionButton;
