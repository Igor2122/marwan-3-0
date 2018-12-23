import React, { Component } from 'react';
import classes from './Landing.css';
import Overlay from '../Overlay/Overlay';


class Landing extends Component {
    
    
    
    render() {
        // const video = 'http://techslides.com/demos/sample-videos/small.mp4';
   const video = 'https://www.videvo.net/videvo_files/converted/2015_05/preview/FoodPack1_13_Videvo.mov72805.webm';
   let videoTag = <video className={classes.BackgroundVideo} loop autoPlay>{/*autoPlay */}
               <source src={video} type="video/mp4" />
             Your browser does not support the video tag.
            </video>
            
            
        return (
            <div className={classes.Home}>
                <Overlay />
                {videoTag}
                <div className={classes.MainTagline}>
                   <h1>Portfolio</h1>
                   <h2>Chef Marwan Slim</h2>
                </div>
            </div>
        );
    }
}

export default Landing;
