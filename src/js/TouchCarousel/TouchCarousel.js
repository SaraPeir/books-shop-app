import React, {Component} from 'react';
import './TouchCarousel.css';

class TouchCarousel extends Component {

   render(){
        return(
            <div className="carousel-t-container">
                <p>{this.props.carouselTitle}</p>
                <div className="carousel-t-wrapper">
                   <div className="card-t-wrapper">A</div>
                   <div className="card-t-wrapper">B</div>
                   <div className="card-t-wrapper">C</div>
                   <div className="card-t-wrapper">D</div>
                   <div className="card-t-wrapper">E</div>
                   <div className="card-t-wrapper">F</div>
                </div>
            </div>
        )
    }
}

export default TouchCarousel;