//css
import classes from "./ImageContainer.module.css";
//imports
import ExperimentBar from "../common/ExperimentBar";
import Characters from "../common/Characters";

const ImageContainer = () => {
  return (
    <div className={classes["image-container"]}>
      <ExperimentBar />
      <Characters />
    </div>
  );
};

export default ImageContainer;
