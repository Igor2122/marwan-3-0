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
    }
    )

    return(
      <div class="gallery-grid">
            
            <div class="div-gen div-one">
                
                        <h4>Parmesan Cake</h4>
               
            </div>
            <div class="div-gen div-two">
                
                <a href="gallery/checkname.jpg" data-lightbox="gellery" data-title="Parmesan Cake">
                    
                        <h4>Parmesan Cake</h4>
                    
                </a>
            </div>

            <div class="div-gen div-three">
                
                
                        <h4>Bloody Mary Oyster</h4>
                    
                
            </div>
            <div class="div-gen div-four">
                
                
                        <h4>Wild Rocket Salad </h4>
                        
            </div>
            <div class="div-gen div-five">
               
                        <h4>Pan Seared Chicken</h4>
                    
            </div>
            <div className="div-gen div-six">
                
                        <h4>Shrimp Cocktail</h4>
            </div>
           
                <h4>@marwan.slim</h4>
          </div>

    );
    
  }
}

export default Recepie;
