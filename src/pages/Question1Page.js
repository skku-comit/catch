import { useState } from "react";
import { Link } from "react-router-dom";
//css
import classes from "./Question1Page.module.css";

// components
import QuestionContainer from "../components/layout/QuestionContainer";
import ImageContainer from "../components/layout/ImageContainer";
import ThrowFish from "../components/dynamic/ThrowFish";
//data
import questionData from "../data/data.json";

const Question1Page = () => {
  const [isCorrect, setIsCorrect] = useState("");

  const answerHandler = (userAnswer) => {
    if (questionData.questions[0].answer === userAnswer) {
      setIsCorrect("true");
    } else {
      setIsCorrect("false");
    }
  };
  const correctLink = "./ans";
  return (
    <div className={classes["page"]}>
      <ImageContainer Citizen={questionData.questions[0].characterImage} />
      <QuestionContainer
        Number={questionData.questions[0].id}
        Problem={questionData.questions[0].problem}
        Image1={questionData.questions[0].image1}
        Image2={questionData.questions[0].image2}
        answer={questionData.questions[0].answer}
        checkWrong={isCorrect}
        onGetAnswer={answerHandler}
      />
      {isCorrect !== "" && (
        <ThrowFish
          Citizen={questionData.questions[0].characterImage}
          Explain={questionData.questions[0].explanation}
          Image1={questionData.questions[0].image1}
          Image2={questionData.questions[0].image2}
          checkWrong={isCorrect}
        />
      )}
      {/* 임시버튼 */}
      <Link to={correctLink} className={classes["temp"]}>
        <button className={classes["temp-button"]} />
      </Link>
    </div>
  );
};

export default Question1Page;
