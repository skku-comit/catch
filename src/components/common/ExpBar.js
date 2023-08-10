// css
import { useContext, useEffect, useState } from 'react';
import classes from './ExpBar.module.css';
import Level from '../../data/level';

//img
import exp0 from '../../assets/exp-bar/exp-0.svg';
import exp1 from '../../assets/exp-bar/exp-1.svg';
import exp2 from '../../assets/exp-bar/exp-2.svg';
import exp3 from '../../assets/exp-bar/exp-3.svg';

import expImg from '../../assets/exp-bar/exp.svg';

import level1 from '../../assets/level/level1.svg';
import level2 from '../../assets/level/level2.svg';
import level3 from '../../assets/level/level3.svg';
import level4 from '../../assets/level/level4.svg';
import level5 from '../../assets/level/level5.svg';

const ExpBar = (props) => {
  const curExpContext = useContext(Level);
  const curExp = parseInt(curExpContext.exp);
  const [expRendered, setExpRendered] = useState(0);

  const [levelImg, setLevelImg] = useState([]);

  console.log(props.isStart);

  const increaseCurExp = () => {
    curExpContext.setExp((current) => {
      return current + 1;
    });
  };

  useEffect(() => {
    let lev = Math.floor(curExp / 3);

    const expType = curExp % 4;

    setExpRendered(expType);

    switch (lev) {
      case 1:
        setLevelImg([
          <img
            className={classes['level-img']}
            src={level1}
            alt="level1"
          ></img>,
        ]);
        break;
      case 2:
        setLevelImg([
          <img
            className={classes['level-img']}
            src={level2}
            alt="level2"
          ></img>,
        ]);
        break;
      case 3:
        setLevelImg([
          <img
            className={classes['level-img']}
            src={level3}
            alt="level3"
          ></img>,
        ]);
        break;
      case 4:
        setLevelImg([
          <img
            className={classes['level-img']}
            src={level4}
            alt="level4"
          ></img>,
        ]);
        break;
      case 5:
        setLevelImg([
          <img
            className={classes['level-img']}
            src={level5}
            alt="level5"
          ></img>,
        ]);
        break;
      default:
        console.log('no value');
    }

    let time;

    if (curExp === 3) {
      time = setTimeout(() => {
        increaseCurExp();
      }, 3000);
    }

    return () => {
      clearTimeout(time);
    };
  }, [curExp, props.isStart]);

  return (
    <div className={classes['experiment-bar']}>
      <img className={classes['exp-container']} src={exp0} alt="exp0"></img>
      <div className={classes.container}>
        <div className={classes['img-container']}>
          {expRendered >= 1 && (
            <img
              className={`${classes.exp} ${
                expRendered === 1 && props.isStart ? classes.fill : ''
              } ${expRendered === 0 && props.isStart ? classes.disappear : ''}`}
              src={expImg}
              alt="exp"
            ></img>
          )}
        </div>
        <div className={classes['img-container']}>
          {expRendered >= 2 && (
            <img
              className={`${classes.exp} ${
                expRendered === 2 && props.isStart ? classes.fill : ''
              } ${expRendered === 0 && props.isStart ? classes.disappear : ''}`}
              src={expImg}
              alt="exp"
            ></img>
          )}
        </div>
        <div className={classes['img-container']}>
          {expRendered >= 3 && (
            <img
              className={`${classes.exp} ${
                expRendered === 3 && props.isStart ? classes.fill : ''
              } ${expRendered === 0 && props.isStart ? classes.disappear : ''}`}
              src={expImg}
              alt="exp"
            ></img>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpBar;
