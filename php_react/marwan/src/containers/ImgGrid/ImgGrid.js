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
          images.push(key['images']['standard_resolution']['url']);
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
            <div className={[classes.DviOne, classes.AllImages].join(' ')}>
              {/* <Overlay /> */}
                <Image   src={this.state.imagesThumb[0]}
                loader={<Spinner />} />
            </div>
            
            <div className={[classes.DivTwo, classes.AllImages].join(' ')}>    
              <Overlay />
                <Image   src={this.state.imagesThumb[1]}
                loader={<Spinner />} />
            </div>

            <div className={[classes.DivThree, classes.AllImages].join(' ')}>
              <Image   src={this.state.imagesThumb[2]}
                loader={<Spinner />} />
            </div>
            
            <div className={[classes.DivFour, classes.AllImages].join(' ')}>
              <Image   src={this.state.imagesThumb[3]}
                loader={<Spinner />} />
            </div>
            
            <div className={[classes.DivFive, classes.AllImages].join(' ')}>
            <Image   src={this.state.imagesThumb[4]}
                loader={<Spinner />} />
            </div>
            
            <div className={[classes.DivSix, classes.AllImages].join(' ')}>
            <Image   src={this.state.imagesThumb[5]}
                loader={<Spinner />} />
            </div>
            
            <div className={[classes.DivSeven, classes.AllImages].join(' ')}>  
            <Image   src={this.state.imagesThumb[6]}
                loader={<Spinner />} />
            </div>
            <div className={[classes.DivEigtht, classes.AllImages].join(' ')}>  
            <Image   src={this.state.imagesThumb[7]}
                loader={<Spinner />} />
            </div>
            <div className={[classes.DivNine, classes.AllImages].join(' ')}>  
            <Image   src={this.state.imagesThumb[8]}
                loader={<Spinner />} />
            </div>
           
          </div>

    );

  }
}

export default Recepie;
