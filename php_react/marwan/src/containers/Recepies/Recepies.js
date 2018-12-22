// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import axios from 'axios';

import Recep from '../../components/Recepie/Recep';



class Recepie extends Component {

  state = {
    recep: []
  }

  componentDidMount () {
    // axios.get('http://localhost:8888/marwan4.0/php_react/api/Recepie/read.php')
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // axios.get('https://marwan-4-0-igdevelopers.c9users.io/php_react/api/Recepie/read.php')
    // .then(response => {
    //   console.log(response.data, typeof(response.data));
    //   this.setState({recep: response.data.recepies});
    // });
  }
  
  render() {
    const recepies = this.state.recep.map(post => {
      return <Recep 
              key={post.img_id}
              name={post.name} 
              img={post.image}
              />
    }
    )

    return(
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <div className="d-flex justify-content-around">
            <h1>Recepies</h1>
          </div>         
        </div>
      </div>

    );
    
  }
}

export default Recepie;
