import { useState, useContext, useEffect } from 'react';
//css
import classes from './QuestionPage.module.css';

// components
import QuestionContainer from '../components/layout/QuestionContainer';
import ImageContainer from '../components/layout/ImageContainer';
import ThrowFish from '../components/dynamic/ThrowFish';
//data
import questionData from '../data/data.json';

//context
import Level from '../data/level';

const Question4Page = () => {
  const [isCorrect, setIsCorrect] = useState('');
  const [openAnswerpage, setOpenAnswerPage] = useState(false);
  const [isQuestionStart, setIsQuestionStart] = useState();
  const [isAnswered, setIsAnswered] = useState(false);

  const curExpContext = useContext(Level);
  const setCurExpIncrease = () => {
    curExpContext.setExp((current) => {
      return current + 1;
    });
  };

  const answerHandler = (userAnswer) => {
    setIsAnswered(true);
    if (questionData.questions[3].answer === userAnswer) {
      setIsCorrect('true');
      setCurExpIncrease();
      setIsQuestionStart(true);
    } else {
      setIsCorrect('false');
      setIsQuestionStart(false);
    }
  };

  const pageHandler = () => {
    setOpenAnswerPage(true);
  };

  return (
    <div className={classes['page']}>
      <ImageContainer
        isAnswered={isAnswered}
        isStart={isQuestionStart}
        Number={questionData.questions[3].id}
        Citizen={questionData.questions[3].characterImage}
        setOpenAnswerPage={setOpenAnswerPage}
      />
      <QuestionContainer
        Number={questionData.questions[3].id}
        Problem={questionData.questions[3].problem}
        Explain={questionData.questions[3].explanation}
        Image1={questionData.questions[3].image1}
        Image2={questionData.questions[3].image2}
        answer={questionData.questions[3].answer}
        checkWrong={isCorrect}
        checkFinished={openAnswerpage}
        onGetAnswer={answerHandler}
      />
      {isCorrect !== '' && (
        <ThrowFish checkWrong={isCorrect} onChangePage={pageHandler} />
      )}

      {openAnswerpage && <div className={classes['backdrop']} />}
    </div>
  );
};

export default Question4Page;
