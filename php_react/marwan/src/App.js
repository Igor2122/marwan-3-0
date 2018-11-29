// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import axios from 'axios';
import classes from './App.css';
import Layout from './containers/Layout/Layout';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  
  
  componentDidMount (){
    
         axios.get('/../../queryData/load-recepies.php')
        .then(response => {
            console.log(response);
  }
  }
  
  
  render() {
    return(
      
      
    );
    
  }
}

export default App;
