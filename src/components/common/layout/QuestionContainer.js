// components
import QuestionNumber from '../QuestionNumber';
import QuestionImage from '../QuestionImage';
import QuestionButton from '../QuestionButton';

// css
import classes from './QuestionContainer.module.css';

const QuestionContainer = ({Number, Problem, Image1, Image2}) => {
  return (
    <>
      <div className={classes["question-problem"]}>
        <QuestionNumber Number={Number}/>
        <div className={classes["question-problem__text"]}>
          {Problem}
        </div>
      </div>

      <div className={classes["question-answer"]}>
        <div className={classes["question-border"]}></div>;
        <QuestionImage Image1={Image1} Image2={Image2}/>
        <QuestionButton />
      </div>
    </>
  );
};

export default QuestionContainer;
