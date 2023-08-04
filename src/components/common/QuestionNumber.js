//css
import classes from "./QuestionNumber.module.css";

const QuestionNumber = ({ Number }) => {
  return (
    <div className={classes["QuestionNumber"]}>
      <h1>{Number}</h1>
    </div>
  );
};

export default QuestionNumber;
