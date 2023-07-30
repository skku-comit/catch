// images

// css
import classes from "./StartPage.module.css";

const StartPage = () => {
  return (
    <div className={classes["start-page-container"]}>
      <div className={classes["start-page-logo"]}>
        <h1>Logo</h1>
      </div>
      <button className={classes["start-page-button"]} />
    </div>
  );
};

export default StartPage;
