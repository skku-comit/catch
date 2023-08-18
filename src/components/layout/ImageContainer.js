//css
import classes from "./ImageContainer.module.css";
//imports
import ExpBar from "../common/ExpBar";
import Characters from "../common/Characters";
import Timer from "../common/Timer";
import { useState } from "react";

const ImageContainer = ({
  isAnswered,
  setOpenAnswerPage,
  isStart,
  Number,
  Citizen,
  checkTypingFinished,
}) => {
  return (
    <div className={classes["image-container"]}>
      <div className={classes["background"]}>
        {/* <Timer
          setIsTimeEnd={setOpenAnswerPage}
          isAnswered={isAnswered}
          isTyped={checkTypingFinished}
        ></Timer> */}
        <ExpBar isStart={isStart} />
        <Characters Number={Number} CitizenImage={Citizen} />
      </div>
    </div>
  );
};

export default ImageContainer;
