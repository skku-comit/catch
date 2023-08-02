//css
import classes from "./AnswerContainer.module.css";

//imports
import QuestionImage from "../common/QuestionImage";
import NextButton from "../common/NextButton";
const AnswerContainer = ({ Problem, Image1, Image2 }) => {
  return (
    <div className={classes["answer-container"]}>
      <div className={classes["answer-text"]}>
        <p>{Problem}</p>
      </div>

      <QuestionImage Image1={Image1} Image2={Image2} />
      <NextButton />
    </div>
  );
};

export default AnswerContainer;
