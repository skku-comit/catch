// hooks
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

// css
import classes from "./StartPage.module.css";

const StartPage = () => {
  const controls = useAnimation(); // drag up
  const [backdropOpacity, setBackdropOpacity] = useState(0);

  const updateBackdropOpacity = (y) => {
    const opacity = Math.min((1300 + -1 * y) / 2400, 0.5);
    setBackdropOpacity(opacity);
  };

  const openBox = async () => {
    await controls.start({ y: -1170 });
    setBackdropOpacity(0.5);
  };

  const closeBox = async () => {
    await controls.start({ y: 0 });
    setBackdropOpacity(0);
  };

  return (
    <div className={classes["start-page"]}>
      <motion.div
        className={classes["backdrop"]}
        style={{ opacity: backdropOpacity }}
      />
      <div className={classes["start-page-logo"]}>Logo</div>
      <motion.div
        className={classes["drag-container"]}
        drag="y"
        dragConstraints={{ top: -1170, bottom: 0 }}
        dragElastic={0.3}
        dragMomentum={false}
        onDrag={(event, info) => {
          updateBackdropOpacity(info.point.y);
        }}
        onDragEnd={(event, info) => {
          if (info.offset.y < -350) {
            openBox();
          } else {
            closeBox();
          }
        }}
        animate={controls}
      >
        <motion.div
          className={classes["image"]}
          drag="y"
          dragPropagation
          whileDrag={{ opacity: 0 }}
          animate={controls}
        />
        <div className={classes["text"]}>
          <Link to={"./q1"} className={classes["start-link"]}>
            <button className={classes["start-button"]} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default StartPage;
