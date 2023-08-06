//css
import classes from "./QuestionNumber.module.css";

const QuestionNumber = ({ Number, checkDone }) => {
  return (
    <div
      className={`${classes["QuestionNumber"]} ${checkDone && classes.done}`}
    >
      <h1>{Number}</h1>
    </div>
  );
};

export default QuestionNumber;
