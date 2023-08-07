//css
import classes from "./QuestionNumber.module.css";

const QuestionNumber = ({ Number, checkDone }) => {
  return (
    <div className={`${classes["number"]} ${checkDone && classes.done}`}>
      <div className={classes["number-text"]}>{Number}</div>
    </div>
  );
};

export default QuestionNumber;
