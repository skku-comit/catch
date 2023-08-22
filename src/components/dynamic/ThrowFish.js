import { motion } from "framer-motion";
import { useEffect } from "react";
//css
import classes from "./ThrowFish.module.css";
//imports

const ThrowFish = ({ checkAnswer, onChangePage }) => {
  useEffect(() => {
    if (checkAnswer === "true") {
      const timer = setTimeout(() => {
        onChangePage();
      }, 4000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      const timer = setTimeout(() => {
        onChangePage();
      }, 2500);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  const fishVariant = {
    hidden: { scale: 0 },
    visible: {
      x: [0],
      y: [0],
      scale: [0],
      rotate: [0],
      transition: {
        duration: 1,
        times: [0, 0.25],
      },
    },
  };
  return (
    <>
      {checkAnswer === "true" ? (
        <div className={classes["fish-moving"]} variants={fishVariant} />
      ) : (
        <div
          className={`${classes["fish-moving"]} ${classes["not-moving"]}`}
          variants={fishVariant}
        />
      )}
    </>
  );
};

export default ThrowFish;
