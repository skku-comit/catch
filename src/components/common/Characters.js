// css
import classes from "./Characters.module.css";

const Characters = ({ CitizenImage }) => {
  return (
    <div className={classes["character-container"]}>
      <div className={classes["catch"]}></div>
      <div
        className={classes["citizen"]}
        style={{
          backgroundImage: `url(${CitizenImage})`,
        }}
      >
        {console.log.CitizenImage}
      </div>
    </div>
  );
};

export default Characters;
