import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation';
import Carusel from '../../components/imageSliders/Carusel/Carusel';
import BackgroundSlider from '../../components/imageSliders/backgroundSlider/backgroundSlider';
import classes from './LandingPage.css';





class Landing extends Component {


     render () {
         return(
          <div className={classes.HomeUpper}>
            <div className={classes.Carusel}>
                <BackgroundSlider />
            </div>
            <Navigation />
          </div>
         );
    }
     }


export default Landing;