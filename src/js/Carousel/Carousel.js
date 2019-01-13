import React, {Component} from 'react';
import Card from '../Card/Card';
import './Carousel.css';

class Carousel extends Component {
    constructor(){
        super();
        this.state = {
            marginLeft: 0,
            marginLeftClass: 'margin-left0'
        }
        this.toRight = this.toRight.bind(this);
        this.toLeft = this.toLeft.bind(this);
    }

    toRight(){
        const {marginLeft} = this.state;
        if(marginLeft === 0){
            this.setState({
                marginLeft: 50,
                marginLeftClass: 'margin-left-less50'
            }) 
        } else if(marginLeft === 50){
            this.setState({
                marginLeft: 100,
                marginLeftClass: 'margin-left-less100'
            }) 
        }
    }

    toLeft(){
        const {marginLeft} = this.state;
        if(marginLeft === 100){
            this.setState({
                marginLeft: 50,
                marginLeftClass: 'margin-left-less50'
            }) 
        } else if(marginLeft === 50){
            this.setState({
                marginLeft: 0,
                marginLeftClass: 'margin-left0'
            }) 
        }
    }

    render(){
        return(
            <div className="carousel-wrapper">
            <button onClick={this.toLeft}>&lt;&lt;</button>
            <button onClick={this.toRight}>&gt;&gt;</button>
                <div className={`carousel ${this.state.marginLeftClass}`}>
                    <Card word={'A'} />
                    <Card word={'B'} />
                    <Card word={'C'} />
                    <Card word={'D'} />
                    <Card word={'E'} />
                    <Card word={'F'} />
                    <Card word={'G'} />
                    <Card word={'H'} />
                    <Card word={'I'} />
                    <Card word={'J'} />
                </div>
            </div>
        )
    }
}

export default Carousel;