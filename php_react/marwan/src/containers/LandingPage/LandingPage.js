import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation';
import BackgroundSlider from '../../components/imageSliders/backgroundSlider/backgroundSlider';
import Jumbotron from '../../components/UI/Jumbotron/Jumbotron';
import classes from './LandingPage.css';
import NavigationSticky from '../../containers/Navigation/Navigation';
import Waypoint from 'react-waypoint';




class Landing extends Component {

    _handleWaypointEnter = () => {
        console.log('entered')
        let navigation = <NavigationSticky />
        return navigation;  
    }

    _handleWaypointLeave = () => {
        console.log('left');
    }

     render () {

        let styles = {
            height: '600px',
            background: 'yellow'
        }

        let style2 = {
            height: '600px',
            background: 'red'
        }
         return(
          <div className={classes.HomeUpper}>
            <div className={classes.Carusel}>
                <BackgroundSlider />
            </div>
            <Navigation />
            <Jumbotron />
            <Waypoint
            onEnter={this._handleWaypointEnter}
                
            onLeave={this._handleWaypointLeave}>
            </Waypoint>
            <div style={styles}></div>
            <div style={style2}></div>
            <div style={styles}></div>
          </div>
         );
    }
}


export default Landing;