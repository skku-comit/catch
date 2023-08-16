// css
import { useContext, useEffect, useState } from "react";
import classes from "./ExpBar.module.css";
import Level from "../../data/level";

const ExpBar = ({ isStart }) => {
  const curExpContext = useContext(Level);
  const curExp = parseInt(curExpContext.exp);

  const [expRendered, setExpRendered] = useState(0);
  const [level, setLevel] = useState(1);
  const [levelUp, setLevelUp] = useState(false);

  const increaseCurExp = () => {
    curExpContext.setExp((current) => current + 1);
  };

  useEffect(() => {
    setLevel(Math.floor(curExp / 4) + 1);
    setExpRendered(curExp % 4);

    let time;
    if (parseInt(curExp % 4) === 3) {
      time = setTimeout(() => {
        setLevelUp(true);
        increaseCurExp();
      }, 2350);
      return () => {
        clearTimeout(time);
      };
    }
  }, [curExp, isStart]);

  return (
    <div className={classes["experiment-bar"]}>
      <div className={classes["experiment-bar_level"]}>
        <div
          className={`${classes["level-text"]} 
          ${level === 1 && classes.level1} 
            ${
              level === 2 && (levelUp ? classes.level2Up : classes.level2)
            }             
            ${level === 3 && (levelUp ? classes.level3Up : classes.level3)}
            ${level === 4 && (levelUp ? classes.level4Up : classes.level4)}
            ${level === 5 && (levelUp ? classes.level5Up : classes.level5)}`}
        />
      </div>

      <div className={classes["experiment-bar_exp_container"]}>
        <div
          className={`${classes.exp} ${classes["exp1"]} 
          ${expRendered >= 1 && classes.filled}
          ${expRendered === 1 && isStart ? classes.fill : ""} 
          ${expRendered === 0 && isStart ? classes.disappear : ""}`}
        ></div>

        <div
          className={`${classes["exp"]} ${classes["exp2"]} 
          ${expRendered >= 2 && classes.filled}
          ${expRendered === 2 && isStart ? classes.fill : ""} 
          ${expRendered === 0 && isStart ? classes.disappear : ""}`}
        ></div>

        <div
          className={`${classes["exp"]} ${classes["exp3"]} 
          ${expRendered >= 3 && classes.filled}
          ${expRendered === 3 && isStart ? classes.fill : ""} 
          ${expRendered === 0 && isStart ? classes.disappear : ""}`}
        />
      </div>
    </div>
  );
};

export default ExpBar;
