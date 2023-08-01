//imports
import { Link } from "react-router-dom";
//css
import classes from "./QuestionButton.module.css";

const QuestionButton = () => {
  const correctLink = "./ans";
  const wrongLink = "./wrg";
  return (
    <Link to={"./ans"} className={classes["button-container"]}>
      <button className={classes["button"]} />
      <button className={classes["button"]} />
    </Link>
  );
};

export default QuestionButton;
