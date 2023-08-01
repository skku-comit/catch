//imports
import { Link } from "react-router-dom";
//css
import classes from "./QuestionButton.module.css";

const QuestionButton = () => {
  const correctLink = "./ans";
  const wrongLink = "./wrg";
  return (
    <Link to={"./ans"} className={classes["button-container"]}>
      <button className={classes["button1"]} />
      <button className={classes["button2"]} />
    </Link>
  );
};

export default QuestionButton;
