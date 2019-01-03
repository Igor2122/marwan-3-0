import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation';
import BackgroundSlider from '../../components/imageSliders/backgroundSlider/backgroundSlider';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import classes from './LandingPage.css';





class Landing extends Component {


     render () {
         return(
          <div className={classes.HomeUpper}>
            <div className={classes.Carusel}>
                <BackgroundSlider />
            </div>
            <Navigation />
            <Jumbotron />
          </div>
         );
    }
     }


export default Landing;