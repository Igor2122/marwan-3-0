import React from 'react';
import classes from './Home.css';
// import { videoTagString, VideoTag } from 'react-video-tag'

// <VideoTag src={mySrc} poster={myPoster} />
const home = ()=> {

   const video = 'http://techslides.com/demos/sample-videos/small.mp4';
      return (
         <div>
         <div className={classes.MainTagline}>
            <h1>Portfolio</h1>
            <h2>Chef Marwan Slim</h2>
         </div>
              <video className={classes.BackgroundVideo} loop >{/*autoPlay */}
               <source src={video} type="video/mp4" />
             Your browser does not support the video tag.
            </video>
          </div>
      );
};



export default home;
