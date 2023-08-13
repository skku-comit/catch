import { motion } from "framer-motion";
//css
import classes from "./QuestionImage.module.css";

const QuestionImage = ({ Image1, Image2, answer, checkAnswer }) => {
  //animation variant
  const imageVariant = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
      },
    },
  };

  return (
    <div className={classes["image-container"]}>
      <motion.img
        src={process.env.PUBLIC_URL + Image1}
        alt="Image 1"
        className={`${classes["image"]} ${classes["image1"]}`}
        variants={imageVariant}
      />

      <motion.img
        src={process.env.PUBLIC_URL + Image2}
        alt="Image 2"
        className={`${classes["image"]} ${classes["image2"]}}`}
        variants={imageVariant}
      />
    </div>
  );
};

export default QuestionImage;
