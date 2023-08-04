// components
import QuestionNumber from "../common/QuestionNumber";
import TextLineBreaker from "../common/TextLineBreaker";
import QuestionImage from "../common/QuestionImage";
import QuestionButton from "../common/QuestionButton";

// css
import classes from "./QuestionContainer.module.css";

const QuestionContainer = ({ Number, Problem, Image1, Image2 }) => {
  return (
    <div className={classes["question-container"]}>
      <div className={classes["question-problem"]}>
        <QuestionNumber Number={Number} />
        <TextLineBreaker Problem={Problem} />
      </div>

      <QuestionImage Image1={Image1} Image2={Image2} />
      <QuestionButton />
    </div>
  );
};

export default QuestionContainer;
