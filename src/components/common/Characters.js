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
        {/* Number === ? 은 kid문제번호 정해지면 바꾸기 */}
        <div
          className={`${classes["kid"]} ${Number === 1 && classes.kidOn}`}
        ></div>
      </div>
    </div>
  );
};

export default Characters;
