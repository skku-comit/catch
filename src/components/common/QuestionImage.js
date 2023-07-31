//css
import classes from "./QuestionImage.module.css";

const QuestionImage = ({Image1, Image2}) => {
  return (
    <div className={classes["image-container"]}>
      <img src={Image1} className={classes["image"]} alt="Image 1"/>
      <img src={Image2} className={classes["image"]} alt="Image 2"/>
    </div>
  );
};

export default QuestionImage;
