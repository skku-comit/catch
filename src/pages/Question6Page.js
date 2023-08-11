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

const Question6Page = () => {
  const [isCorrect, setIsCorrect] = useState('');
  const [openAnswerpage, setOpenAnswerPage] = useState(false);
  const [isQuestionStart, setIsQuestionStart] = useState();

  const curExpContext = useContext(Level);
  const setCurExpIncrease = () => {
    curExpContext.setExp((current) => {
      return current + 1;
    });
  };

  const answerHandler = (userAnswer) => {
    if (questionData.questions[5].answer === userAnswer) {
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
        isStart={isQuestionStart}
        Number={questionData.questions[5].id}
        Citizen={questionData.questions[5].characterImage}
        setOpenAnswerPage={setOpenAnswerPage}
      />
      <QuestionContainer
        Number={questionData.questions[5].id}
        Problem={questionData.questions[5].problem}
        Explain={questionData.questions[5].explanation}
        Image1={questionData.questions[5].image1}
        Image2={questionData.questions[5].image2}
        answer={questionData.questions[5].answer}
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

export default Question6Page;
