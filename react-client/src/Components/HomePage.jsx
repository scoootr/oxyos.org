import React, { Component } from 'react';
import banner from '../Assets/oxyPhoto.jpg';

class HomePage extends Component {
  render() {
    return (
      <div>
        Home page
        <img id="bannerImage" src={banner}></img>
      </div>
    )
  }
}

export default HomePage;
