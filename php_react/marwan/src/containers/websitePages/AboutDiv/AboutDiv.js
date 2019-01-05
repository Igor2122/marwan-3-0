import React from 'react';
// import classes from './Home.css';
// import { videoTagString, VideoTag } from 'react-video-tag'
import ImgGrid from '../../ImgGrid/ImgGrid';
import Landing from '../../../components/About/About'
import About from '../../About/About';
import Navigation from '../../Navigation/Navigation';


const home = () => {

   
   return (
      <div>
         <Navigation />
         <Landing />
         <About />
         <ImgGrid />
      </div>
   );
};



export default home;
