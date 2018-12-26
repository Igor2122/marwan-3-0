// eslint-disable-next-line
import React, { Component } from 'react';
// eslint-disable-next-line
import axios from 'axios';
import classes from './ImgGrid.css';
import Overlay from '../../components/Overlay/Overlay';
import Image from 'react-image';
import Spinner from '../../components/UI/Spinner/Spinner';
import Element from '../../components/GridElement/GridElement';




class Recepie extends Component {

  state = {
    imagesThumb: ['https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/355241/pexels-photo-355241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260','https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',],
    error: false,
  }

  componentDidMount() {
    
    // axios.get('http://localhost:8888/marwan4.0/php_react/api/Recepie/read.php')
    // axios.get('https://jsonplaceholder.typicode.com/posts')


    // axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=285502478.8001032.48720ae4588d48c9be566f37274a24ff')
    //   .then(response => {
    //     console.log(response.data, typeof(response.data));
    //     let images = []
    //     for (const key of response.data.data) {
    //       images.push(key['images']['standard_resolution']['url']);
    //       console.log(key);
    //     }
    //     this.setState({ imagesThumb: images })
    //   })
    //   .catch(error => {
    //     // console.log(error);
    //     this.setState({ error: true });
    //   });;

    // console.log(this.state.images);

  }

  genreateGrid = () => {

    
  }

  render() {

    const gridClasses = ['DviOne', 'DivTwo', 'DivThree', 'DivFour', 'DivFive', 'DivSix', 'DivSeven', 'DivEigtht', 'DivNine' ]

    let outPut = [];
    gridClasses.map(res =>  {
        // console.log(res, typeof(res));
        return outPut.push(<Element name={res} />);
      });
      let cont = null
      cont = outPut.map(res => res);

    return (

      <div className={classes.GalleryGrid}>
        {cont}
      </div>

    );

  }
}

export default Recepie;
