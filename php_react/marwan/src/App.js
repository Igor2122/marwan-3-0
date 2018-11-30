// eslint-disable-next-line
import React, { Component } from 'react';

// eslint-disable-next-line
import classes from './App.css';
// eslint-disable-next-line
import { BrowserRouter } from 'react-router-dom'


import Recepie from './containers/Recepies/Recepies';


class App extends Component {


  render() {
return(
      <div className="row mt-5">
        <Recepie />
      </div>
    );
  }
}

export default App;
