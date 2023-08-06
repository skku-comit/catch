import { useEffect, useState } from "react";
//css
import classes from "./ThrowFish.module.css";
//imports

const ThrowFish = ({ checkWrong, onChangePage }) => {
  //   const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      //   setAnimationFinished(true);
      onChangePage();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  //   useEffect(() => {
  //     if (animationFinished) onChangePage(true);
  //   }, [animationFinished]);

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
