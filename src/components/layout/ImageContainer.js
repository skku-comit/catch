//css
import classes from "./ImageContainer.module.css";
//imports
import ExpBar from "../common/ExpBar";
import Characters from "../common/Characters";

const ImageContainer = ({ Citizen }) => {
  return (
    <div className={classes["image-container"]}>
      <div className={classes["background"]}>
        <ExpBar />
        <Characters CitizenImage={Citizen} />
      </div>
    </div>
  );
};

export default ImageContainer;
