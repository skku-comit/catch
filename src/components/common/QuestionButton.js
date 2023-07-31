//css
import classes from "./QuestionButton.module.css";

const QuestionButton = () => {
  return (
    <div className={classes["button-container"]}>
      <div className={classes["button"]}></div>
      <div className={classes["button"]}></div>
    </div>
  );
};

export default QuestionButton;
