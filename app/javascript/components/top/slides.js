import React, {Component} from 'react';


class Slides extends Component{
  render(){
    return(
      <div className="slide">
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/8/86/Landscape_mountain.jpg"
          alt="First slide"
        />
      </div>
    )
  }
}

export default Slides;
