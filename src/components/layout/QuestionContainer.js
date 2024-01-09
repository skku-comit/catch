import { motion } from "framer-motion";
// components
import QuestionNumber from "../common/QuestionNumber";
import QuestionText from "../common/QuestionText";
import QuestionImage from "../common/QuestionImage";
import QuestionButton from "../common/QuestionButton";

// css
import classes from "./QuestionContainer.module.css";
import NextButton from "../common/NextButton";

const QuestionContainer = ({
  Number,
  Problem,
  Explain,
  Image1,
  Image2,
  answer,
  checkAnswer,
  checkFinished,
  checkTimer,
  onGetAnswer,
  onSetTypingDone,
}) => {
  const checkAnswerHandler = (userAnswer) => {
    onGetAnswer(userAnswer);
  };
  const checkTypingDone = () => {
    onSetTypingDone();
  };

  //animation variant
  const problemVariant = {
    hidden: {},
    visible: {
      scaleX: [1 / 7, 1 / 7, 1],
      scaleY: [1 / 2, 1, 1],
      transition: {
        duration: 0.3,
        ease: "linear",
        times: [0, 0.5, 1],
        when: "beforeChildren",
      },
    },
  };

  const mainVariant = {
    hidden: {},
    visible: {
      scale: [0.001, 1],
      transition: {
        delay: 0.3,
        duration: 0.25,
        when: "beforeChildren",
      },
    },
  };

  return (
    <>
      <div
        className={`${classes["background"]} ${
          Number <= 6 ? classes.background1 : classes.background2
        }`}
      />
      {/* {checkAnswer === "" && !checkFinished && !checkTimer && (
        <div className={classes["triangle"]}></div>
      )} */}
      <motion.div
        className={`${classes["question-problem"]} 
        ${
          checkAnswer === ""
            ? checkTimer
              ? classes.timeout
              : ""
            : checkAnswer === "true"
            ? classes.correct
            : classes.wrong
        }         
        ${checkFinished && classes.done}`}
        variants={problemVariant}
        initial="hidden"
        animate="visible"
      >
        <QuestionNumber
          Number={Number}
          checkAnswer={checkAnswer}
          checkTimer={checkTimer}
        />
        <QuestionText
          Problem={Problem}
          Explain={Explain}
          checkAnswer={checkAnswer}
          checkFinished={checkFinished}
          onSetTypingDone={checkTypingDone}
          checkTimer={checkTimer}
        />
      </motion.div>
      <motion.div
        className={classes["question-container"]}
        variants={mainVariant}
        initial="hidden"
        animate="visible"
      >
        <QuestionImage
          Image1={Image1}
          Image2={Image2}
          answer={answer}
          checkAnswer={checkAnswer}
        />
        {!checkFinished ? (
          <QuestionButton
            checkAnswer={checkAnswer}
            onCheckAnswer={checkAnswerHandler}
            checkTimer={checkTimer}
          />
        ) : (
          <NextButton Number={Number} />
        )}
      </motion.div>
    </>
  );
};

export default QuestionContainer;
