import { delay, motion } from "framer-motion";
//
import { useContext, useEffect, useState } from "react";
//imports
import Level from "../data/level";
import { Link } from "react-router-dom";
//css
import classes from "./ResultPage.module.css";

const ResultPage = () => {
  const curExpContext = useContext(Level);
  const curExp = parseInt(curExpContext.exp);
  const level = Math.floor(curExp / 4) + 1;

  const [score, setScore] = useState(0);
  console.log("맞춘개수 : ");
  console.log(curExp - level + 1);

  useEffect(() => {}, [score]);

  const onAnimationComplete = () => {
    console.log(score);
    console.log("Occured!");
    const interval = setTimeout(() => {
      setScore((prevScore) => prevScore + 1);
    }, 500);
    return () => {
      clearTimeout(interval);
    };
  };

  const resetExp = () => {
    curExpContext.setExp(0);
  };
  const selectBacgroundImage = (level) => {
    switch (level) {
      case 1:
        return "/images/background/resultpage/level1.png";
      case 2:
        return "/images/background/resultpage/level2.png";
      case 3:
        return "/images/background/resultpage/level3.png";
      case 4:
        return "/images/background/resultpage/level4.png";
      case 5:
        return "/images/background/resultpage/level5-1.png";
    }
  };
  const selectResultImage = (level) => {
    switch (level) {
      case 1:
        return "/images/resultpage/exp_level_1.png";
      case 2:
        return "/images/resultpage/exp_level_2.png";
      case 3:
        return "/images/resultpage/exp_level_3.png";
      case 4:
        return "/images/resultpage/exp_level_4.png";
      case 5:
        return "/images/resultpage/exp_level_5.png";
    }
  };
  const selectParticleImage = (level) => {
    switch (level) {
      case 1:
        return "/images/resultpage/particle_1.png";
      case 2:
        return "/images/resultpage/particle_2.png";
      case 3:
        return "/images/resultpage/particle_3.png";
      case 4:
        return "/images/resultpage/particle_4.png";
      case 5:
        return "/images/resultpage/particle_5.png";
    }
  };

  return (
    <div
      className={classes["background"]}
      style={{
        backgroundImage: `url(${selectBacgroundImage(level)})`,
      }}
    >
      <motion.img
        className={classes["expResult"]}
        src={selectResultImage(level)}
        alt="resultExpImage"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.75,
          duration: 0.5,
          ease: [0, 0, 0, 1],
        }}
      />
      <motion.div
        className={classes["score-container"]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.2,
          delay: 1.5,
        }}
      >
        {score < curExp - level + 1 ? (
          <motion.div
            className={classes["score"]}
            animate={{ opacity: [1, 0, 0, 1], y: [0, -80, 0.1, 0] }}
            transition={{ duration: 3, times: [0, 0.98, 0.99, 1] }}
            onAnimationComplete={onAnimationComplete()}
          >
            {score}
          </motion.div>
        ) : (
          <div className={classes["score"]}>{score}</div>
        )}

        <div className={classes["score"]}>/</div>
        <div className={classes["score"]}>12</div>
      </motion.div>
      <Link to={"/"}>
        <button className={classes["button"]} onClick={resetExp} />
      </Link>
      <motion.div
        className={classes["particle"]}
        style={{ backgroundImage: `url(${selectParticleImage(level)})` }}
        initial={{ rotateZ: 0 }}
        animate={{
          scale: [1, 1.5, 1],
          rotateZ: 360,
        }}
        transition={{
          delay: 1.5,
          duration: 60,
        }}
      />
    </div>
  );
};

export default ResultPage;
