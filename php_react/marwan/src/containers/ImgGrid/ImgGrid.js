// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import axios from 'axios';
import Recep from '../../components/Recepie/Recep';
import classes from './ImgGrid.css';




class Recepie extends Component {

  state = {
    recep: []
  }

  componentDidMount() {
    // axios.get('http://localhost:8888/marwan4.0/php_react/api/Recepie/read.php')
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=285502478.8001032.48720ae4588d48c9be566f37274a24ff')
    // .then(response => {
    //   console.log(response.data, typeof(response.data));
    //   // this.setState({recep: response.data.recepies});
    // });
  }

  render() {
    // eslint-disable-next-line
    const recepies = this.state.recep.map(post => {
      return <Recep 
              />
    })

    return (

      <div className={classes.GalleryGrid}>
            <div className={classes.DviOne}>
                <h4>DviOne</h4>
            </div>
            
            <div className={classes.DivTwo}>    
                <h4>DivTwo</h4>
            </div>

            <div className={classes.DivThree}>                     <h4>DivThree</h4>
            </div>
            
            <div className={classes.DivFour}>
                  <h4>DivFour</h4>      
            </div>
            
            <div className={classes.DivFive}>
                <h4>DivFive</h4>
            </div>
            
            <div className={classes.DivSix}>
                <h4>DivSix</h4>
            </div>
            
            <div className={classes.DivSeven}>    
                <h4>Shrimp Cocktail</h4>
            </div>
           
          </div>

    );

  }
}

export default Recepie;
