// css
import classes from "./Characters.module.css";

const Characters = () => {
  return (
    <div className={classes["character-container"]}>
      <div className={classes["catch"]}></div>
      <div className={classes["citizen"]}></div>
    </div>
  );
};

export default Characters;
