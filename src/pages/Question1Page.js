//css
import classes from "./Question1Page.module.css";
import Image1 from "../assets/images/start-button.png";

//imports
import QuestionContainer from "../components/common/layout/QuestionContainer";

const Question1Page = () => {
  return (
    <div className={classes["question-page"]}>
      <QuestionContainer
        Number={1}
        Problem={"안녕 캐치, 부동산이 너무 많아 우리 부동산이..."}
        Image1={Image1}
        Image2={Image1}
      />
    </div>
  );
};

export default Question1Page;
