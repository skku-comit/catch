import gsap from "gsap";
import classes from "./Timer.module.css";
import { useEffect, useRef } from "react";

//img
import timeFullImg from "../../assets/timer/time-full.svg";
import timeContainerImg from "../../assets/timer/time-none.svg";
import timer from "../../assets/timer/timer.svg";

const Timer = (props) => {
  const barRef = useRef(null);
  const isAnswered = props.isAnswered;

  const setWhenTimeEndHandler = () => {
    props.setIsTimeEnd(true);
  };

  // useEffect(() => {
  //   let timerAnimation = null;
  //   if (props.isTyped) {
  //     if (!isAnswered) {
  //       timerAnimation = gsap.fromTo(
  //         barRef.current,
  //         { scaleX: 1 },
  //         {
  //           scaleX: 0,
  //           duration: 20.3,
  //           ease: "none",
  //           transformOrigin: "left",
  //           onComplete: () => {
  //             setWhenTimeEndHandler();
  //           },
  //           onUpdate: () => {
  //             if (isAnswered) {
  //               timerAnimation.kill();
  //             }
  //           },
  //         }
  //       );
  //     }
  //   }

  //   return () => {
  //     if (timerAnimation) {
  //       timerAnimation.kill();
  //     }
  //   };
  // }, [isAnswered, props.isTyped]);

  return (
    <div className={classes["container"]}>
      <img src={timer} className={classes["timer-image"]} alt="timer-image" />
      <div className={classes["bar-container"]}>
        <img
          src={timeContainerImg}
          className={classes["bar-none"]}
          alt="time-container"
        />
        <img
          ref={barRef}
          src={timeFullImg}
          className={classes["bar-full"]}
          alt="time-bar"
        />
      </div>
    </div>
  );
};

export default Timer;
