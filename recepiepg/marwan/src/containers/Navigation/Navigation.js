import React from 'react';
import classes from './Navigation.css';

const navigation = (props) => {
return (
   <ul className={classes.Menu}> 
      <li>
         Home
      </li> 
      <li>
         Recepies
      </li> 
      <li>
         Menu
      </li> 
   </ul> 
);
}



export default navigation;