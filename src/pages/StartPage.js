import { motion, useAnimation } from "framer-motion";
// hooks
import { Link } from "react-router-dom";

// css
import classes from "./StartPage.module.css";

const StartPage = () => {
  const controls = useAnimation();

  const openBox = async () => {
    await controls.start({ y: -1170 });
  };
  const closeBox = async () => {
    await controls.start({ y: 0 });
    controls.set({ opacity: 1 });
  };
  return (
    <div className={classes["start-page"]}>
      <div className={classes["start-page-logo"]}>Logo</div>

      <motion.div
        className={classes["drag-container"]}
        drag="y"
        dragConstraints={{ top: -1000, bottom: 0 }}
        dragElastic={0}
        dragMomentum={false}
        // dragSnapToOrigin={"true"}
        onDragEnd={(event, info) => {
          console.log("정보 : " + info.offset.y);
          if (info.offset.y < -500) {
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
