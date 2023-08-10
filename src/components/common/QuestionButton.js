//imports
import { Link } from 'react-router-dom';
import { useState } from 'react';
//css
import classes from './QuestionButton.module.css';

const QuestionButton = ({ onCheckAnswer }) => {
  // const correctLink = "./ans";
  // const wrongLink = "./wrg";

  const [userAnswer, setUserAnswer] = useState('intial');

  const AclickHandler = () => {
    setUserAnswer('A');
    onCheckAnswer(userAnswer);
    alert('Clicked A');
  };
  const BclickHandler = () => {
    setUserAnswer('B');
    onCheckAnswer(userAnswer);
    alert('Clicked B');
  };

  return (
    // 해설화면 확인하기 : 나중에 Timer로 구현예정
    <div className={classes['button-container']}>
      <button className={classes['correct-link']} onClick={AclickHandler} />
      <button className={classes['wrong-link']} onClick={BclickHandler} />

      {/* <Link to={correctLink} className={classes["correct-link"]}>
        <button className={classes['correct-button']}/>
      </Link>
      <Link to={correctLink} className={classes["wrong-link"]}>
        <button className={classes['wrong-button']}/>
      </Link> */}
    </div>
  );
};

export default QuestionButton;
