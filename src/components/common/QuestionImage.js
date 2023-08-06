//css
import classes from "./QuestionImage.module.css";

const QuestionImage = ({ Image1, Image2, answer, checkDone }) => {
  return (
    <div className={classes["image-container"]}>
      <img
        src={Image1}
        alt="Image 1"
        className={`${classes["image"]} ${classes["image1"]} ${
          answer === "B" && checkDone !== "" && classes.done
        }`}
      />
      <img
        src={Image2}
        alt="Image 2"
        className={`${classes["image"]} ${classes["image2"]} ${
          answer === "A" && checkDone !== "" && classes.done
        }`}
      />
    </div>
  );
};

export default QuestionImage;
