//css
import classes from "./Question1Page.module.css";

const Question1Page = () => {
  return (
    <div className={classes["question-container"]}>
      <div className={classes["question-problem"]}>
        <div className={classes["question-problem-number"]}>1</div>
        <div className={classes["question-problem-text"]}>
          안녕 캐치, 부동산이 너무 많아 우리 부동산이...
        </div>
      </div>

      <div className={classes["question-answer"]}>
        <div className={classes["question-image"]}></div>
        <div className={classes["question-image"]}></div>
        <div className={classes["question-button"]}></div>
        <div className={classes["question-button"]}></div>
      </div>
    </div>
  );
};

export default Question1Page;
