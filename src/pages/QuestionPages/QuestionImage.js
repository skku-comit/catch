//css
import classes from "./QuestionImage.module.css";

const QuestionImage = () => {
  return (
    <div className={classes["image-container"]}>
      <div className={classes["image"]} />
      <div className={classes["image"]} />
    </div>
  );
};

export default QuestionImage;
