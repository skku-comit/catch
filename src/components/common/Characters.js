import { useState, useContext, useEffect } from "react";
// css
import classes from "./Characters.module.css";
//data
import Level from "../../data/level";

const Characters = ({ Number, CitizenImage }) => {
  const curExpContext = useContext(Level);
  const curExp = parseInt(curExpContext.exp);

  const [level, setLevel] = useState(1);
  const [levelUp, setLevelUp] = useState(false);
  const [levelUpDone, setLevelUpDone] = useState(false);
  useEffect(() => {
    setLevel(Math.floor(curExp / 4) + 1);
    if (parseInt(curExp % 4) === 3) {
      const time = setTimeout(() => {
        setLevelUp(true);
      }, 1550);
      return () => {
        clearTimeout(time);
      };
    }
    if (levelUp) {
      setLevelUpDone(true);
    }
  }, [curExp, levelUp]);

  const selectCatchImage = (level) => {
    switch (level) {
      case 1:
        return "/images/character/Catch_01.png";
      case 2:
        return "/images/character/Catch_02.png";
      case 3:
        return "/images/character/Catch_03.png";
      case 4:
        return "/images/character/Catch_04.png";
      case 5:
        return "/images/character/Catch_05.png";
    }
  };
  const selectWhiteCatchImage = (level) => {
    switch (level) {
      case 1:
        return "/images/character/Catch_01_white.png";
      case 2:
        return "/images/character/Catch_02_white.png";
      case 3:
        return "/images/character/Catch_03_white.png";
      case 4:
        return "/images/character/Catch_04_white.png";
      case 5:
        return "/images/character/Catch_05_white.png";
    }
  };
  return (
    <div className={classes["character-container"]}>
      <img
        className={`${classes.catch} ${
          level === 3
            ? classes.catch3
            : level === 4
            ? classes.catch4
            : level === 5
            ? classes.catch5
            : classes.catch12
        }        
        ${levelUp && !levelUpDone && classes.disappearCatch}        
        ${levelUpDone && classes.appearCatch}`}
        src={selectCatchImage(level)}
        alt="catch"
      />
      <img
        className={`${classes.catch} ${
          level === 3
            ? classes.catch3
            : level === 4
            ? classes.catch4
            : level === 5
            ? classes.catch5
            : classes.catch12
        }        
        ${classes.whiteCatch}
        ${levelUp && !levelUpDone && classes.disappearWhiteCatch}
        ${levelUpDone && classes.appearWhiteCatch}`}
        src={selectWhiteCatchImage(level)}
        alt="WhiteCatch"
      />
      <div
        className={`${classes["citizen"]} ${classes["floating"]}`}
        style={{
          backgroundImage: `url(${CitizenImage})`,
        }}
      >
        <div
          className={`${classes["kidOff"]} ${Number === 4 && classes.kidOn}`}
        ></div>
      </div>
    </div>
  );
};

export default Characters;
