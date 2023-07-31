// hooks
import { Link } from "react-router-dom";

// css
import classes from "./StartPage.module.css";

const StartPage = () => {
  return (
    <div className={classes["start-page-container"]}>
      <div className={classes["start-page-logo"]}>
        <h1>Logo</h1>
      </div>
      <Link to={"./q1"} className={classes["start-page-button"]}>
        <button/>
      </Link>
    </div>
  );
};

export default StartPage;
