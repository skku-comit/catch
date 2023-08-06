import { useEffect, useState } from "react";
//css
import classes from "./ThrowFish.module.css";
//imports

const ThrowFish = ({ checkWrong, onChangePage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onChangePage();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
