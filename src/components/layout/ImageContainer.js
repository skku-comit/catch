//css
import classes from './ImageContainer.module.css';
//imports
import ExpBar from '../common/ExpBar';
import Characters from '../common/Characters';
import Timer from '../common/Timer';

const ImageContainer = ({
  isAnswered,
  setOpenAnswerPage,
  isStart,
  Number,
  Citizen,
}) => {
  return (
    <div className={classes['image-container']}>
      <div className={classes['background']}>
        <Timer setIsTimeEnd={setOpenAnswerPage} isAnswered={isAnswered}></Timer>
        <ExpBar isStart={isStart} />
        <Characters Number={Number} CitizenImage={Citizen} />
      </div>
    </div>
  );
};

export default ImageContainer;
