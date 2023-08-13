import { motion } from "framer-motion";
//css
import classes from "./QuestionImage.module.css";
import { useEffect, useState } from "react";

const QuestionImage = ({ Image1, Image2, answer, checkAnswer }) => {
  const [aniFinished, setAniFinished] = useState(false);
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
    done: {
      opacity: 0.5,
    },
  };

  useEffect(() => {
    if (checkAnswer !== "") {
      setAniFinished(true);
    }
  }, [checkAnswer]);

  return (
    <div className={classes["image-container"]} variants={imageVariant}>
      <motion.img
        src={process.env.PUBLIC_URL + Image1}
        alt="Image 1"
        className={`${classes["image"]} ${classes["image1"]}`}
        initial={!aniFinished ? "hidden" : answer === "B" ? "done" : "visible"}
        animate={!aniFinished ? "visible" : answer === "B" ? "done" : "visible"}
        variants={imageVariant}
      />
      <motion.img
        src={process.env.PUBLIC_URL + Image2}
        alt="Image 2"
        className={`${classes["image"]} ${classes["image2"]}}`}
        initial={!aniFinished ? "hidden" : answer === "A" ? "done" : "visible"}
        animate={!aniFinished ? "visible" : answer === "A" ? "done" : "visible"}
        variants={imageVariant}
      />
    </div>
  );
};

export default QuestionImage;
