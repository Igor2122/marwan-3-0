import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation';
import Carusel from '../../components/Carusel/Carusel';
import classes from './LandingPage.css';





class Landing extends Component {


     render () {
         return(
          <div>
            <div className={classes.Carusel}>
                <Carusel />
            </div>
                <Navigation />
          </div>
         );
    }
     }


export default Landing;