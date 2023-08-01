//css
import classes from "./QuestionImage.module.css";

const QuestionImage = ({ Image1, Image2 }) => {
  return (
    <div className={classes["image-container"]}>
      <img src={Image1} alt="Image 1" className={classes["image"]} />
      <img src={Image2} alt="Image 2" className={classes["image"]} />
    </div>
  );
};

export default QuestionImage;
