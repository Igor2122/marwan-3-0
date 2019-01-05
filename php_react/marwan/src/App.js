// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import classes from './App.css';
// eslint-disable-next-line
import { BrowserRouter, Route } from 'react-router-dom'
import About from './containers/websitePages/AboutDiv/AboutDiv';
import LandingPage from './containers/websitePages/LandingPage/LandingPage';
import Recepies from './containers/Recepies/Recepies';
import { Row, Col } from 'reactstrap';
import { DB_CONFIG }from './config/config';
import firebase from 'firebase/app'


// <Route path="/" exact component={Home}></Route>
// <Route path="/recepies" exact component={Recepies}></Route>
class App extends Component {

  constructor(props){
    super(props);

    // this.app = firebase.initializeApp({DB_CONFIG});
    // this.db = this.app.database().ref().child('recepies');

    console.log(firebase.name);
    console.log(firebase.database());

    this.satae = {
      recepies : []
    }
  }

  render() {
    return(
        <BrowserRouter>
          <div className={classes.Component}>
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
