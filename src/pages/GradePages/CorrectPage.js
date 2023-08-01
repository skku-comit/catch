//css
import classes from "./CorrectPage.module.css";
import Image1 from "../../assets/images/start-button.png";

//imports
import AnswerContainer from "../../components/common/layout/AnswerContainer";

const CorrectPage = () => {
  return (
    <div className={classes["question-page"]}>
      <AnswerContainer
        Problem={"안녕 캐치, 부동산이 너무 많아 우리 부동산이..."}
        Image1={Image1}
        Image2={Image1}
      />
    </div>
  );
};

export default CorrectPage;
