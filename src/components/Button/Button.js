import {useState} from 'react';

import './Button.css';

const Button = () => {
  let [isOn, setIsOn] = useState(false);

  let classes = [];

  if(isOn) {
    classes.push('on');
  }
  else {
    classes.push('off');
  }

  const clickHandler = () => {
    setIsOn(prevState => !prevState);
  }


  return (
    <button className={classes} onClick={clickHandler}></button>
  );
};

export default Button;
