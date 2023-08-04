//imports
import { Link } from "react-router-dom";
//css
import classes from "./QuestionButton.module.css";

const QuestionButton = () => {
  const correctLink = "./ans";
  const wrongLink = "./wrg";
  return (
    // 해설화면 확인하기 : 나중에 Timer로 구현예정
    <div className={classes["button-container"]}>
      <button className={classes["button1"]} />
      <button className={classes["button2"]} />
    </div>
  );
};

export default QuestionButton;
