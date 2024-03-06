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
// Mobile
import MobileDragContainer from "../components/common/MobileDescription";
import MobileDescription from "../components/common/MobileDescription";
const StartPage = () => {
  const [backdropOpacity, setBackdropOpacity] = useState(0);
  const version = useRecoilValue(media_version);

  const updateBackdropOpacity = (y) => {
    const opacity = Math.min((1300 + -1 * y) / 2400, 0.5);
    setBackdropOpacity(opacity);
  };

  // mobile
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  function openDescriptionHandler() {
    setIsOpenDescription((prev) => !prev);
  }
  return (
    <motion.div
      className={classes["start-page"]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      {version !== "MOBILE" ? (
        <>
          <motion.div
            className={classes["backdrop"]}
            style={{ opacity: backdropOpacity }}
          />

          <DragContainer
            updateBackdropOpacity={updateBackdropOpacity}
            setBackdropOpacity={setBackdropOpacity}
          />
        </>
      ) : (
        !isOpenDescription && (
          <button
            className={classes["mobile-startBtn"]}
            style={{
              // bottom: (window.innerHeight - (window.innerWidth * 4) / 3) / 2,
              bottom: (window.innerHeight - (window.innerWidth * 6) / 5) / 2,
            }}
            onClick={openDescriptionHandler}
          />
        )
      )}
      {isOpenDescription && <MobileDescription />}
    </motion.div>
  );
};

export default StartPage;
