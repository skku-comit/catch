//css
import classes from "./Question1Page.module.css";
import Image1 from "../assets/button/start-button.png";
//imports
import ExperimentBar from "../components/layout/ExperimentBar";
import CharacterContainer from "../components/layout/CharacterContainer";
import AnswerContainer from "../components/layout/AnswerContainer";

const AnswerPage = () => {
  return (
    <div className={classes["page"]}>
      <div className={classes["image-container"]}>
        <ExperimentBar />
        <CharacterContainer />
      </div>
      <AnswerContainer
        Answer={"Drop Shadow를 사용하여..."}
        Image1={Image1}
        Image2={Image1}
      />
    </div>
  );
};

export default AnswerPage;
