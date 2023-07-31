//css
import classes from "./QuestionNumber.module.css";

const QuestionNumber = () => {
  let number = 1;
  return (
    <div className={classes["QuestionNumber"]}>
      <h1>{number}</h1>
    </div>
  );
};

export default QuestionNumber;
