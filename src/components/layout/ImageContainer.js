//css
import classes from "./ImageContainer.module.css";
//imports
import ExpBar from "../common/ExpBar";
import Characters from "../common/Characters";

const ImageContainer = ({ Number, Citizen }) => {
  return (
    <div className={classes["image-container"]}>
      <div className={classes["background"]}>
        <ExpBar />
        <Characters Number={Number} CitizenImage={Citizen} />
      </div>
    </div>
  );
};

export default ImageContainer;
