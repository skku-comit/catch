//css
import classes from "./NextButton.module.css";
//imports
import { Link } from "react-router-dom";
//mp3
import useEffectSound from "./useEffectSound";
import effectSound from "../../assets/bgm/page-change.mp3";
const NextButton = ({ Number }) => {
  const link = "/q" + String(Number + 1);
  const es = useEffectSound(effectSound, 1);

  const playES = () => {
    es.play();
  };
  return (
    <Link to={link} className={classes["button-container"]}>
      <button className={classes["button"]} onClick={playES} />
    </Link>
  );
};

export default NextButton;
