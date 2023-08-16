import { useState, useContext, useEffect } from "react";
// css
import classes from "./Characters.module.css";
//data
import Level from "../../data/level";

const Characters = ({ Number, CitizenImage }) => {
  const curExpContext = useContext(Level);
  const curExp = parseInt(curExpContext.exp);

  const [level, setLevel] = useState(1);

  useEffect(() => {
    setLevel(Math.floor(curExp / 4) + 1);
  }, [curExp]);

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
  return (
    <div className={classes["character-container"]}>
      <div
        className={classes["catch"]}
        style={{
          backgroundImage: `url(${selectCatchImage(level)})`,
        }}
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
