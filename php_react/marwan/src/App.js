// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import classes from './App.css';
// eslint-disable-next-line
import { BrowserRouter, Route } from 'react-router-dom'
// import Recepie from './containers/Recepies/Recepies';
import Menu from './containers/Navigation/Navigation';
import About from './containers/AboutDiv/AboutDiv';
import LandingPage from './containers/LandingPage/LandingPage';
import Recepies from './containers/Recepies/Recepies';
import { Row, Col } from 'reactstrap';


// <Route path="/" exact component={Home}></Route>
// <Route path="/recepies" exact component={Recepies}></Route>
class App extends Component {

  render() {
    return(
        <BrowserRouter>
          <div className={classes.Component}>
          <Menu />
              <Row>
                <Col>
                  <Route path="/" exact component={LandingPage}></Route>
                  <Route path="/about" exact component={About}></Route>
                  <Route path="/recepies" exact component={Recepies}></Route>
                </Col>
              </Row>
            
          </div>
        </BrowserRouter>
        );
      }
}

export default App;
