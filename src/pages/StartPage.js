// images
import StartButton from "../assets/start-button.png";

// css
import classes from "./StartPage.module.css";

const StartPage = () => {
  return (
    <div className={classes["start-page-container"]}>
            <h1>Start Page</h1>
      <img src={StartButton} alt="start button" />
    </div>
  );
};

export default StartPage;
