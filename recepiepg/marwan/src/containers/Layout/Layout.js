import React, {Component} from 'react';
import classes from './Layout.css';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
class Layout extends Component {

    render () {
    return (
       <div className={classes.Parent}>
          <div>
             <Navigation />
          </div>
          <div>
             <Home />
          </div>
          
          
       </div>
      );  
   }
}
export default Layout;