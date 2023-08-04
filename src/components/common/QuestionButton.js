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
      <Link to={correctLink} className={classes["correct-link"]}>
        <button className={classes['correct-button']}/>
      </Link>
      <Link to={correctLink} className={classes["wrong-link"]}>
        <button className={classes['wrong-button']}/>
      </Link>
    </div>
  );
};

export default QuestionButton;
