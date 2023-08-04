//css
import classes from "./Question1Page.module.css";

// components
import QuestionContainer from "../components/layout/QuestionContainer";
import ImageContainer from "../components/layout/ImageContainer";
//data
import questionData from "../data/data.json";

const Question1Page = () => {
  return (
    <div className={classes["page"]}>
      <ImageContainer Citizen={questionData.questions[0].characterPath} />
      <QuestionContainer
        Number={1}
        Problem={questionData.questions[0].problem}
        Image1={questionData.questions[0].image1}
        Image2={questionData.questions[0].image2}
      />
    </div>
  );
};

export default Question1Page;
