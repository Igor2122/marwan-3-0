import React, {Component} from 'react';
import classes from './'
import Navigation from '../Navigation/Navigation';

class Layout extends Component {

    render () {
    return (
       <div>
          <div>
             <Navigation />
          </div>
          <div>Content</div>
       </div>
      );  
   }
}
export default Layout;