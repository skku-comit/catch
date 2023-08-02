//css
import classes from "./Question1Page.module.css";
import Image1 from "../assets/button/start-button.png";

// components
import ExperimentBar from "../components/layout/ExperimentBar";
import CharacterContainer from "../components/layout/CharacterContainer";
import QuestionContainer from "../components/layout/QuestionContainer";

const Question1Page = () => {
  return (
    <div className={classes["question-page"]}>
      <div className={classes["image-container"]}>
        <ExperimentBar />
        <CharacterContainer />
      </div>
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
