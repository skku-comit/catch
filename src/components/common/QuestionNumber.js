//css
import classes from "./QuestionNumber.module.css";

const QuestionNumber = ({ Number }) => {
  return (
    <div className={classes["QuestionNumber"]}>
      <div className={classes["question-border"]}></div>
      <h1>{Number}</h1>
    </div>
  );
};

export default QuestionNumber;
