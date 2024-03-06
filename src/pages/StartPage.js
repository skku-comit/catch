// React-Responsive
import { useRecoilValue } from "recoil";
import { media_version } from "../data/atom";
// Framer-Motion
import { motion, useAnimation } from "framer-motion";
// hooks
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// css
import classes from "./StartPage.module.css";
// Components
import DragContainer from "../components/common/DragContainer";

const StartPage = () => {
  const [backdropOpacity, setBackdropOpacity] = useState(0);
  const version = useRecoilValue(media_version);

  const updateBackdropOpacity = (y) => {
    const opacity = Math.min((1300 + -1 * y) / 2400, 0.5);
    setBackdropOpacity(opacity);
  };

  return (
    <motion.div
      className={classes["start-page"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={classes["backdrop"]}
        style={{ opacity: backdropOpacity }}
      />
      <DragContainer
        updateBackdropOpacity={updateBackdropOpacity}
        setBackdropOpacity={setBackdropOpacity}
      />
    </motion.div>
  );
};

export default StartPage;
