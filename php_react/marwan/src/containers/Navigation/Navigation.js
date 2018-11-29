import React from 'react';
import classes from './Navigation.css';
// eslint-disable-next-line
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Recepies from '../Recepies/Recepies';

const navigation = (props) => {
return (
   <ul className={classes.Menu}> 
      <li>
         
      </li> 
      <li>
         
      </li> 
      <Route path="/" exact component={Home}></Route>
      <Route path="/recepies" exact component={Recepies}></Route>
   </ul> 
);
}



export default navigation;