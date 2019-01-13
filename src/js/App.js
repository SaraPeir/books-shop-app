import React, {Component} from 'react';
import {connect} from 'react-redux';
import {requestInfo} from '../redux/actions.js';
import Carousel from './Carousel/Carousel';
import Card from './Card/Card';

class App extends Component {
    componentDidMount() {
        this.props.requestInfo();
    }

    render(){       
        
        return(
            <div>
                <h1>{this.props.bookName}</h1>
                <Carousel>
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
                </Carousel>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        bookName: state.requestedInfo.firstNameBook
    }
}

export default connect(mapStateToProps, {requestInfo})(App);


// ideale: quando avremo un servizio, si potrá trasformare l'output di quest'ultimo in un  json, metterlo in un file ed attuare come sopra.