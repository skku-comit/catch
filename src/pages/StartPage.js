// hooks
import { Link } from "react-router-dom";

// css
import classes from "./StartPage.module.css";

const StartPage = () => {
  return (
    <div className={classes["start-page"]}>
      <div className={classes["start-page-logo"]}>logo</div>
      <Link to={"./q1"} className={classes["start-link"]}>
        <button className={classes["start-button"]}/>
      </Link>
    </div>
  );
};

export default StartPage;
