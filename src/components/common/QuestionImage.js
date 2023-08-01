//css
import classes from "./QuestionImage.module.css";

const QuestionImage = ({ Image1, Image2 }) => {
  return (
    <div className={classes["image-container"]}>
      <img src={""} alt="Image 1" className={classes["image1"]} />
      <img src={""} alt="Image 2" className={classes["image2"]} />
    </div>
  );
};

export default QuestionImage;
