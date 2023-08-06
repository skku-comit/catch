//css
import classes from "./ThrowFish.module.css";
//imports

const ThrowFish = ({ checkWrong }) => {
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
