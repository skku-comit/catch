//css
import classes from './NextButton.module.css';
//imports
import { Link } from 'react-router-dom';

const NextButton = ({ Number }) => {
  const link = '/q' + String(Number + 1);
  return (
    <Link to={link} className={classes['button-container']}>
      <button className={classes['button']} />
    </Link>
  );
};

export default NextButton;
