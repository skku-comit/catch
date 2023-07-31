//css
import classes from "./Question1Page.module.css";

//imports
import QuestionImage from "./QuestionImage";
import QuestionButton from "./QuestionButton";
import QuestionNumber from "../../components/common/QuestionNumber";

const Question1Page = () => {
  return (
    <div className={classes["question-container"]}>
      <div className={classes["question-problem"]}>
        <QuestionNumber />
        <div className={classes["question-problem-text"]}>
          안녕 캐치, 부동산이 너무 많아 우리 부동산이...
        </div>
      </div>

      <div className={classes["question-answer"]}>
        <div className={classes["question-border"]}></div>;
        <QuestionImage />
        <QuestionButton />
      </div>
    </div>
  );
};

export default Question1Page;
