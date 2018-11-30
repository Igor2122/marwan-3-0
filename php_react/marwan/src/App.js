// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import axios from 'axios';
import classes from './App.css';
import Layout from './containers/Layout/Layout';
import { BrowserRouter } from 'react-router-dom'

class App extends Component {

  state = {
    recep: []
  }

  componentDidMount () {
    
    axios.get('http://localhost:8888/marwan4.0/php_react/api/Recepie/read.php')
    .then(response => {
      console.log(typeof(response.data));
      this.setState({recep: response.data});
      
    });
  }
  
  render() {

    // const recep = this.state.recep.map(post => {
    //   return {

    //   }
    // }

    // )

    return(
      <div>

      </div>
      
    );
    
  }
}

export default App;
