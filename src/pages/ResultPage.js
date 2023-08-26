import { delay, motion } from "framer-motion";
//
import { useContext, useEffect, useState } from "react";
//imports
import Level from "../data/level";
import { Link } from "react-router-dom";
//css
import classes from "./ResultPage.module.css";
//mp3
import useEffectSound from "../components/common/useEffectSound";
import Level4Sound from "../assets/bgm/level4-sound.mp3";
import Level5Sound from "../assets/bgm/level5-sound.mp3";
const ResultPage = () => {
  const curExpContext = useContext(Level);
  const curExp = parseInt(curExpContext.exp);
  const level = Math.floor(curExp / 4) + 1;

  const sound4 = useEffectSound(Level4Sound, 1);
  const sound5 = useEffectSound(Level5Sound, 1);

  const playES = (level) => {
    if (level === 4) sound4.play();
    else if (level === 5) sound5.play();
  };
  useEffect(() => {
    playES(level);
    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 60000);
    return () => clearTimeout(timer);
  }, []);

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
        return "/images/background/resultpage/level5.png";
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
        <motion.div
          className={classes["score"]}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.5 }}
        >
          {curExp - level + 1}
        </motion.div>

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
