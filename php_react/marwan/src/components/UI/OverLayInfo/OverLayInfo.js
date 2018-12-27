import React from 'react';
import classes from './OverLayInfo.css';



const OverlayInfo = ( props ) => {
return (
      <div className={[classes.Show, classes.InfoOverlay].join(' ')}>
      <h3>{props.value}</h3>
      </div>
);
}




export default OverlayInfo;

