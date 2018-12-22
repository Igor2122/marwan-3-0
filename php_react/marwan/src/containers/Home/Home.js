import React, { Component } from 'react';
import classes from './Home.css';
// import { videoTagString, VideoTag } from 'react-video-tag'

// <VideoTag src={mySrc} poster={myPoster} />
class Home extends Component {

   state = {
      video: 'http://techslides.com/demos/sample-videos/small.mp4'
      // video: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'
   }
   render() {
      return (
         <div>
              <video className={classes.BackgroundVideo} loop autoPlay>
               <source src={this.state.video} type="video/mp4" />
             Your browser does not support the video tag.
            </video>
          </div>
      );
   }
}



export default Home;
