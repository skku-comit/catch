//css
import classes from "./ImageContainer.module.css";
//imports
import ExpBar from "../common/ExpBar";
import Characters from "../common/Characters";
import Timer from "../common/Timer";

const ImageContainer = ({
  isAnswered,
  isStart,
  setTimeEnd,
  Number,
  Citizen,
  checkTypingFinished,
}) => {
  return (
    <div className={classes["image-container"]}>
      <Timer
        setIsTimeEnd={setTimeEnd}
        isAnswered={isAnswered}
        isTyped={checkTypingFinished}
      />
      <ExpBar isStart={isStart} />
      <Characters Number={Number} CitizenImage={Citizen} />
    </div>
  );
};

export default ImageContainer;
