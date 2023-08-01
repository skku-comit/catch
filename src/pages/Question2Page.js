//css
import classes from "./Question1Page.module.css";
import Image1 from "../assets/images/start-button.png";

//imports
import QuestionContainer from "../components/common/layout/QuestionContainer";

const Question2Page = () => {
  return (
    <div className={classes["question-page"]}>
      <QuestionContainer
        Number={2}
        Problem={"안녕 캐치"}
        Image1={Image1}
        Image2={Image1}
      />
    </div>
  );
};

export default Question2Page;
