import React, {Component} from 'react';
import booksObject from '../books.json';
import {connect} from 'react-redux';
import {requestInfo} from '../redux/actions.js';

class App extends Component {
    componentDidMount() {
        this.props.requestInfo();
    }

    render(){       
        
        return(
            <div>
            <h1>{this.props.bookName}</h1>
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



// export default App;

/* const bookName = this.props;
        const {array} = this.state; */

// ideale: quando avremo un servizio, si potrá trasformare l'output di quest'ultimo in un  json, metterlo in un file ed attuare come sopra.