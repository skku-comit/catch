// images
import StartButton from "../assets/images/start-button.png";

// css
import classes from "./StartPage.module.css";

const StartPage = () => {
  return (
    <div className={classes["start-page-container"]}>
      <div className={classes["start-page__logo"]}>
        <h1>Logo</h1>
      </div>
      <div>
        <img src={StartButton} alt="start button" />
      </div>
    </div>
  );
};

export default StartPage;
