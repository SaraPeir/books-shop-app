import React, {Component} from 'react';
import './Carousel.css';

class Carousel extends Component {
    constructor(){
        super();
        this.state = {
            marginLeft: 0,
            marginLeftClass: 'margin-left0',
            disabledLeft: 'disabled-left',
            disabledRight: ''
        }
        this.toRight = this.toRight.bind(this);
        this.toLeft = this.toLeft.bind(this);
    }

    toRight(){
        const {marginLeft} = this.state;
        if(marginLeft === 0){
            this.setState({
                marginLeft: 50,
                marginLeftClass: 'margin-left-less50',
                disabledRight: '',
                disabledLeft: ''
            }) 
        } else if(marginLeft === 50) {
            this.setState({
                marginLeft: 100,
                marginLeftClass: 'margin-left-less100'
            })
        } else if(marginLeft === 100) {
            this.setState({
                marginLeft: 150,
                marginLeftClass: 'margin-left-less150'
            })
        }
         else if(marginLeft === 150){
            this.setState({
                marginLeft: 200,
                marginLeftClass: 'margin-left-less200',
                disabledRight: 'disabled-right',
                disabledLeft: ''
            }) 
        } 
    }

    toLeft(){
        const {marginLeft, marginLeftClass} = this.state;
        if(marginLeftClass === 'margin-left-less200'){
            this.setState({
                marginLeft: 100,
                marginLeftClass: 'margin-left-less100',
                disabledRight: ''
            }) 
        } else if(marginLeft === 100){
            this.setState({
                marginLeft: 0,
                marginLeftClass: 'margin-left0',
                disabledLeft: 'disabled-left',
                disabledRight: ''
            }) 
        } else if(marginLeft === 100){
            this.setState({
                marginLeft: 50,
                marginLeftClass: 'margin-left50',
                disabledLeft: '',
                disabledRight: ''
            }) 
        }
    }

    render(){
        return(
            <div className="carousel-container">
                <button className={`button-style ${this.state.disabledLeft}`} onClick={this.toLeft}>&lt;&lt;</button>
                    <div className="carousel-wrapper">
                        <div className={`carousel ${this.state.marginLeftClass}`}>
                            {this.props.children}
                        </div>
                    </div>
                <button className={`button-style ${this.state.disabledRight}`} onClick={this.toRight}>&gt;&gt;</button>
            </div>
        )
    }
}

export default Carousel;