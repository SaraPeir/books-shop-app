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
            <h1>Hola!</h1>
        )
    }
}

export default connect(null, {requestInfo})(App);



// export default App;

// ideale: quando avremo un servizio, si potrá trasformare l'output di quest'ultimo in un  json, metterlo in un file ed attuare come sopra.