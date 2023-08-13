import { motion } from "framer-motion";
//css
import classes from "./QuestionNumber.module.css";

const QuestionNumber = ({ Number, checkAnswer }) => {
  const numberVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.65,
        duration: 0.2,
      },
    },
  };
  return (
    <motion.div
      className={`${classes["number"]} ${checkAnswer && classes.done}`}
      variants={numberVariant}
    >
      <motion.div className={classes["number-text"]} variants={numberVariant}>
        {Number}
      </motion.div>
    </motion.div>
  );
};

export default QuestionNumber;
