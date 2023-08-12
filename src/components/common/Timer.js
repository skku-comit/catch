import gsap from 'gsap';
import classes from './Timer.module.css';
import { useEffect, useRef } from 'react';

//img
import timeFullImg from '../../assets/timer/time-full.svg';
import timeContainerImg from '../../assets/timer/time-none.svg';
import timer from '../../assets/timer/timer.svg';

const Timer = (props) => {
  const barRef = useRef(null);
  const isAnswered = props.isAnswered;

  const setWhenTimeEndHandler = () => {
    props.setIsTimeEnd(true);
  };

  useEffect(() => {
    let timerAnimation = null;

    if (!isAnswered) {
      timerAnimation = gsap.fromTo(
        barRef.current,
        { scaleX: 0.99 },
        {
          scaleX: 0,
          duration: 10,
          ease: 'none',
          transformOrigin: 'left',
          onComplete: () => {
            setWhenTimeEndHandler();
          },
          onUpdate: () => {
            if (isAnswered) {
              console.log(isAnswered);
              timerAnimation.kill();
            }
          },
        }
      );
    }

    return () => {
      if (timerAnimation) {
        timerAnimation.kill();
      }
    };
  }, [isAnswered]);

  return (
    <div className={classes['time-container']}>
      <img
        src={timer}
        className={classes['timer-container']}
        alt="timer-container"
      ></img>
      <div className={classes['bar-container']}>
        <img
          src={timeContainerImg}
          className={classes['bar-none']}
          alt="time-container"
        ></img>
        <img
          ref={barRef}
          src={timeFullImg}
          className={classes['bar-full']}
          alt="time-bar"
        ></img>
      </div>
    </div>
  );
};

export default Timer;
