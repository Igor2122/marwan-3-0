// eslint-disable-next-line
import React, { Component } from 'react';

// eslint-disable-next-line
import classes from './App.css';
// eslint-disable-next-line
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom';


// import Recepie from './containers/Recepies/Recepies';
import Menu from './containers/Navigation/Navigation';
import Home from './containers/Home/Home';
import Recepies from './containers/Recepies/Recepies';

class App extends Component {


  render() {
    return(
        <BrowserRouter>
          <div>
              <Menu />   
          <div className="row">
              <div className="col-md-3">
              </div>
              <div className="col-md-9">
                <Route path="/" exact component={Home}></Route>
                <Route path="/recepies" exact component={Recepies}></Route>
              </div>
          </div>
          
          </div>
        </BrowserRouter>
        );
      }
}

export default App;
