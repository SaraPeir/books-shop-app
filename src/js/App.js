import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestInfo } from '../redux/actions.js';
import { mapInfo } from '../redux/actions.js';
import Carousel from './Carousel/Carousel';
import Card from './Card/Card';
import Loader from 'react-loader-spinner'

class App extends Component {
    componentDidMount() {
        this.props.requestInfo();
    }

    componentWillReceiveProps(nextProps){
        if(this.props.infoBooks !== nextProps.infoBooks){
            this.props.mapInfo(nextProps.infoBooks);
        }
    }

    render() {
        return (
            <div>
                <Carousel>
                    {this.props.ficcion}
                </Carousel>

                <Carousel>
                    {this.props.noFiccion}
                </Carousel>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        infoBooks: state.requestedInfo.infoBooks,
        ficcion: state.mapInfo.ficcion,
        noFiccion: state.mapInfo.noFiccion

    }
}

export default connect(mapStateToProps, { requestInfo, mapInfo })(App);

