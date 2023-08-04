//css
import classes from "./ImageContainer.module.css";
//imports
import ExperimentBar from "../common/ExperimentBar";
import Characters from "../common/Characters";

const ImageContainer = ({ Citizen }) => {
  return (
    <div className={classes["image-container"]}>
      <div className={classes["background"]}>
        <ExperimentBar />
        <Characters CitizenImage={Citizen} />
      </div>

      <div className={classes["ground"]}></div>
    </div>
  );
};

export default ImageContainer;
