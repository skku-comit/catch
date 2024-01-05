//css
import classes from "./NextButton.module.css";
//imports
import { Link } from "react-router-dom";
import { useEffect } from "react";
//mp3
import useEffectSound from "./useEffectSound";
import effectSound from "../../assets/bgm/page-change.mp3";
const NextButton = ({ Number }) => {
  let link = "/q" + String(Number + 1);
  if (Number === 12) {
    link = "/result";
  }
  const es = useEffectSound(effectSound, 1);

  const playES = () => {
    es.play();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 60000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Link to={link} className={classes["button-container"]}>
      <button className={classes["button"]} onClick={playES} />
    </Link>
  );
};

export default NextButton;
