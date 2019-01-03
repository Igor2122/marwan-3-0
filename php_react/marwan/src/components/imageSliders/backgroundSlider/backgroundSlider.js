import React, { Component } from 'react'
 
import BackgroundSlideshow from 'react-background-slideshow'


 
export default class App extends Component {
  render () {

    let image1 = 'https://images.pexels.com/photos/1729541/pexels-photo-1729541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    let image2 = 'https://images.pexels.com/photos/1146242/pexels-photo-1146242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

    return (
      <div>
        <BackgroundSlideshow images={[ image1, image2 ]} />
      </div>
    )
  }
}
