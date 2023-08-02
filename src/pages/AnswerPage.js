//css
import classes from "./Question1Page.module.css";
import Image1 from "../assets/button/start-button.png";
//imports
import ImageContainer from "../components/layout/ImageContainer";
import AnswerContainer from "../components/layout/AnswerContainer";

const AnswerPage = () => {
  return (
    <div className={classes["page"]}>
      <div className={classes["backdrop"]}></div>
      <ImageContainer />
      <AnswerContainer
        Answer={"Drop Shadow를 사용하여..."}
        Image1={Image1}
        Image2={Image1}
      />
    </div>
  );
};

export default AnswerPage;
