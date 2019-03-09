import React, { Component } from 'react';
import './Card.css';
import ModalBS from '../Modal/Modal';
import {Heart} from '../../images/icons/Heart.js';
import { buildPurchaseArray } from '../../redux/actions.js';
import { connect } from 'react-redux';

class Card extends Component {
  constructor(){
    super();
    this.state = {
      toggle:  true,
      iconClass: 'icon-style' 
    }
    this.togglePreference = this.togglePreference.bind(this);
  }

  togglePreference(){
    const {toggle} = this.state;
    const changedIconClass = toggle ? 'selected-icon-style' : 'icon-style';
    toggle && console.log(this.props.index);
    this.setState({
      toggle: !toggle,
      iconClass: changedIconClass
    })
    this.props.buildPurchaseArray(this.props.index, toggle, this.props.kind);
  }

  render() {
    return (
      <div>
        <div className="card">
        <div className="card-header">
          <div className="icons-container">
            <div className={`icon-common-style ${this.state.iconClass}`} onClick={this.togglePreference} >{Heart}</div>
            <div>{Heart}</div>
          </div>
          <div className="price-container">
            <p id="no-margin">18 euro</p>
          </div>
        </div>
          <img className="card-box-img" src={this.props.url} alt={`${this.props.title} image`} />
          <p className="hidden">{this.props.index}</p>
          <p className="hidden">{this.props.kind}</p>
          <p id="strong" className="margin-auto">{this.props.title}</p>
          <p className="margin-auto">{this.props.author}</p>
          <p id="tag" className="noVisibleInMobile margin-auto">{this.props.type}</p>
          <ModalBS title={this.props.title} url={this.props.url} author={this.props.author} introductionText={this.props.introductionText} content={this.props.content} pageNumber={this.props.pageNumber} tag={this.props.tag} type2={this.props.type2} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    arrayBooks: state.buildPurchaseArray.arrayBooks
  }
}

export default connect(mapStateToProps, { buildPurchaseArray })(Card);
