// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import axios from 'axios';
import classes from './ImgGrid.css';
import Overlay from '../../components/Overlay/Overlay';
import Image from 'react-image';
import Spinner from '../../components/UI/Spinner/Spinner'




class Recepie extends Component {

  state = {
    imagesThumb: ['https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'],
    error: false,
  }

  componentDidMount() {
    
    // axios.get('http://localhost:8888/marwan4.0/php_react/api/Recepie/read.php')
    // axios.get('https://jsonplaceholder.typicode.com/posts')


    axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=285502478.8001032.48720ae4588d48c9be566f37274a24ff')
      .then(response => {
        console.log(response.data, typeof(response.data));
        let images = []
        for (const key of response.data.data) {
          images.push(key['images']['low_resolution']['url']);
          console.log(key);
        }
        this.setState({ imagesThumb: images })
      })
      .catch(error => {
        // console.log(error);
        this.setState({ error: true });
      });;

    console.log(this.state.images);

  }

  render() {

    return (

      <div className={classes.GalleryGrid}>
            <div className={classes.DivTop}>
              <h4>DivTop</h4>
            </div>
            
            <div className={classes.DviOne}>
              <Overlay />
                <Image max-width="100%" height="100%" src={this.state.imagesThumb[0]}
                loader={<Spinner />} />
            </div>
            
            <div className={classes.DivTwo}>    
              <Overlay />
                <Image max-width="100%" height="100%" src={this.state.imagesThumb[1]}
                loader={<Spinner />} />
            </div>

            <div className={classes.DivThree}>
              <Image max-width="100%" height="100%" src={this.state.imagesThumb[2]}
                loader={<Spinner />} />
            </div>
            
            <div className={classes.DivFour}>
              <Image max-width="100%" height="100%" src={this.state.imagesThumb[3]}
                loader={<Spinner />} />
            </div>
            
            <div className={classes.DivFive}>
                <h4>DivFive</h4>
            </div>
            
            <div className={classes.DivSix}>
                <h4>DivSix</h4>
            </div>
            
            <div className={classes.DivSeven}>  
                <h4>DivSeven</h4>
            </div>
            <div className={classes.DivEigtht}>  
                <h4>DivEigtht</h4>
            </div>
            <div className={classes.DivNine}>  
                <h4>DivNine</h4>
            </div>
           
          </div>

    );

  }
}

export default Recepie;
