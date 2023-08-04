//imports
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//css
import classes from "./QuestionButton.module.css";

const QuestionButton = ({ onCheckAnswer }) => {
  // const correctLink = "./ans";
  // const wrongLink = "./wrg";

  const [userAnswer, setUserAnswer] = useState("initial");
  useEffect(() => {
    if (userAnswer !== "initial") onCheckAnswer(userAnswer);
  }, [userAnswer]);

  const AclickHandler = () => {
    setUserAnswer("A");
  };
  const BclickHandler = () => {
    setUserAnswer("B");
  };

  return (
    // 해설화면 확인하기 : 나중에 Timer로 구현예정
    <div className={classes["button-container"]}>
      <button
        className={`${classes.link} ${classes["correct-link"]} `}
        onClick={AclickHandler}
      />
      <button
        className={`${classes.link} ${classes["wrong-link"]}`}
        onClick={BclickHandler}
      />

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
