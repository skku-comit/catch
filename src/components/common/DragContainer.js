import React, { useEffect, useRef } from "react";
// Framer-motion
import { motion, useAnimation } from "framer-motion";
// Router
import { Link } from "react-router-dom";
// css
import classes from "./DragContainer.module.css";
const DragContainer = ({ updateBackdropOpacity, setBackdropOpacity }) => {
  const controls = useAnimation(); // drag up
  const container = useRef(null);

  const openBox = async () => {
    await controls.start({ y: -1 * 0.95 * window.innerHeight });
    setBackdropOpacity(0.5);
  };
  useEffect(() => {
    console.log(container.current.clientHeight);
  }, []);
  const closeBox = async () => {
    await controls.start({
      y: 0,
    });
    setBackdropOpacity(0);
  };
  return (
    <motion.div
      style={{
        width: Math.min(window.innerWidth, (window.innerHeight * 3) / 4),
      }}
      className={classes["drag-container"]}
      drag="y"
      dragConstraints={{ top: -1 * window.innerHeight, bottom: 0 }}
      dragElastic={0.3}
      dragMomentum={false}
      onDrag={(event, info) => {
        updateBackdropOpacity(info.point.y);
      }}
      onDragEnd={(event, info) => {
        console.log("놨음");
        console.log(info.offset.y);
        if (info.offset.y < -90) {
          openBox();
        } else {
          closeBox();
        }
      }}
      animate={controls}
    >
      <motion.div
        className={classes["area"]}
        drag="y"
        dragPropagation
        whileDrag={{ opacity: 0 }}
        animate={controls}
      />
      <motion.div
        className={classes["image"]}
        drag="y"
        dragPropagation
        whileDrag={{ opacity: 0 }}
        animate={controls}
      />
      <div className={classes["text"]} ref={container}>
        <Link to="./q1" className={classes["start-link"]}>
          <motion.button
            className={classes["start-button"]}
            key="button"
            exit={{ scale: 0.5 }}
          />
        </Link>
      </div>
    </motion.div>
  );
};

export default DragContainer;
