//css
import classes from "./QuestionNumber.module.css";

const QuestionNumber = ({ Number, checkDone }) => {
  return (
    <div
      className={`${classes["QuestionNumber"]} ${checkDone && classes.done}`}
    >
      <div>{Number}</div>
    </div>
  );
};

export default QuestionNumber;
