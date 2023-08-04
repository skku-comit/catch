import { useState } from "react";

//css
import classes from "./Question1Page.module.css";

// components
import QuestionContainer from "../components/layout/QuestionContainer";
import ImageContainer from "../components/layout/ImageContainer";
//data
import questionData from "../data/data.json";

const Question1Page = () => {
  const [isCorrect, setIsCorrect] = useState();

  const answerHandler = (userAnswer) => {
    if (questionData.questions[0].answer === userAnswer) {
      setIsCorrect("true");
      console.log(isCorrect);
    } else {
      setIsCorrect("false");
      console.log(isCorrect);
    }
  };

  return (
    <div className={classes["page"]}>
      <ImageContainer Citizen={questionData.questions[0].characterPath} />
      <QuestionContainer
        Number={1}
        Problem={questionData.questions[0].problem}
        Image1={questionData.questions[0].image1}
        Image2={questionData.questions[0].image2}
        checkWrong={isCorrect}
        onGetAnswer={answerHandler}
      />
    </div>
  );
};

export default Question1Page;
