import React, { Component } from 'react'
import Rcepie from '../../../components/Recepie/Recep';
import classes from './Recepies.css';

class RecepiesPage extends Component {


     render () {
         return(
          <div className={classes.RecepiesDiv}>
               <h1>Recepies page</h1>
               <Rcepie />
          </div>
         );
    }
     }


export default RecepiesPage;        