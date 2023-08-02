//css
import classes from "./AnswerContainer.module.css";

//imports
import QuestionImage from "../common/QuestionImage";

const AnswerContainer = ({ Problem, Image1, Image2 }) => {
  return (
    <>
      <div className={classes["answer-text"]}>
        <h1>해설</h1>
      </div>

      <div className={classes["answer"]}>
        <div className={classes["answer-boder"]}></div>;
        <QuestionImage Image1={Image1} Image2={Image2} />
        {/* <AnswerText></AnswerText>
        <AnswerButton /> */}
      </div>
    </>
  );
};

export default AnswerContainer;
