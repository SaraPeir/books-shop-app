import React, {Component} from 'react';
import {connect} from 'react-redux';
import {requestInfo} from '../redux/actions.js';
import Carousel from './Carousel/Carousel';

class App extends Component {
    componentDidMount() {
        this.props.requestInfo();
    }

    render(){       
        
        return(
            <div>
                <h1>{this.props.bookName}</h1>
                <Carousel />
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