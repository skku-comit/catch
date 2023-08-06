//css
import classes from "./NextButton.module.css";
//imports
import { Link } from "react-router-dom";

const NextButton = () => {
  return (
    <Link to={"/q1/q2"} className={classes["button-container"]}>
      <button className={classes["button"]} />
    </Link>
  );
};

export default NextButton;
