import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestInfo } from '../redux/actions.js';
import { mapInfo, buildPurchaseArray } from '../redux/actions.js';
import Carousel from './Carousel/Carousel';
import Header from './Header/Header';
import Loader from 'react-loader-spinner';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

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
                <Header />
                <BrowserView>
                    <Carousel carouselTitle={'La top 10 de libros de ficción'}>
                        {this.props.ficcion}
                    </Carousel>
                </BrowserView>
                 }
                
                 <BrowserView>
                    <Carousel carouselTitle={'La top 10 de libros de no ficción'}>
                        {this.props.noFiccion}
                    </Carousel>
                </BrowserView>
                <button onClick={this.props.buildPurchaseArray}>Launch event</button>
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

export default connect(mapStateToProps, { requestInfo, mapInfo, buildPurchaseArray })(App);

