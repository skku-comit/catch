import { motion } from "framer-motion";
import { useEffect } from "react";
//css
import classes from "./ThrowFish.module.css";
//imports

const ThrowFish = ({ checkWrong, onChangePage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onChangePage();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const fishVariant = {
    hidden: { scale: 0 },
    visible: {
      x: [],
      y: [],
      scale: [],
      rotate: [],
    },
    transition: {
      duration: 1.55,
      times: [0],
    },
  };
  return (
    <>
      {checkWrong === "true" ? (
        <div className={classes["fish-moving"]} />
      ) : (
        <div className={`${classes["fish-moving"]} ${classes["not-moving"]}`} />
      )}
    </>
  );
};

export default ThrowFish;
