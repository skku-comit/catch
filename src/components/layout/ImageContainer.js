//css
import classes from "./ImageContainer.module.css";
//imports
import ExperimentBar from "../common/ExperimentBar";
import Characters from "../common/Characters";

const ImageContainer = () => {
  return (
    <div className={classes["image-container"]}>
      <div className={classes["background"]}>
        <ExperimentBar />
        <Characters />
      </div>

      <div className={classes["ground"]}></div>
    </div>
  );
};

export default ImageContainer;
