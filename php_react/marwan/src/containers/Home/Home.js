import React from 'react';
// import classes from './Home.css';
// import { videoTagString, VideoTag } from 'react-video-tag'
import ImgGrid from '../ImgGrid/ImgGrid';
import Landing from '../../components/Landing/Landing'
import About from '../About/About';


const home = () => {

   
   return (
      <div>
         <Landing />
         <About />
         <ImgGrid />
      </div>
   );
};



export default home;
