// css
import classes from "./Characters.module.css";

const Characters = ({ Number, CitizenImage }) => {
  return (
    <div className={classes["character-container"]}>
      <div className={classes["catch"]}></div>
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
