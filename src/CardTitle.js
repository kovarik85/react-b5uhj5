import React from 'react';
import './style.css'

const CardTitle = props => {
  return (
    <div classname="szoveg">
      {props.text}
    </div>
  );
};

export default CardTitle;
