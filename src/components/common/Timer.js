import gsap from "gsap";
import classes from "./Timer.module.css";
import { useEffect, useRef } from "react";

const Timer = (props) => {
  const barRef = useRef(null);

  useEffect(() => {
    const timerAnimation = gsap.fromTo(
      barRef.current,
      { scaleX: 1 },
      { scaleX: 0, duration: 30, ease: "none", transformOrigin: "left" }
    );

    return () => {
      timerAnimation.kill();
    };
  }, []);

  return (
    <div className={classes["bar-container"]}>
      <div ref={barRef} className={classes["bar"]}></div>
    </div>
  );
};

export default Timer;
