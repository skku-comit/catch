//css
import classes from "./Question1Page.module.css";
import Image1 from "../assets/button/start-button.png";

// components
import QuestionContainer from "../components/layout/QuestionContainer";
import ImageContainer from "../components/layout/ImageContainer";

const Question1Page = () => {
  return (
    <div className={classes["page"]}>
      <ImageContainer />

      <QuestionContainer
        Number={1}
        Problem={"안녕 캐치, 부동산이 너무 많아"}
        Image1={Image1}
        Image2={Image1}
      />
    </div>
  );
};

export default Question1Page;
