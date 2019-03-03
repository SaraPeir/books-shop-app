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
      toggle:  false,
      iconClass: 'icon-style' 
    }
    this.togglePreference = this.togglePreference.bind(this);
  }

  togglePreference(){
    const {toggle} = this.state;
    const changedIconClass = toggle ? 'selected-icon-style' : 'icon-style';
    toggle && console.log(this.props.index);
    toggle && buildPurchaseArray(this.props.index);
    this.setState({
      toggle: !toggle,
      iconClass: changedIconClass
    })
  }

  render() {
    return (
      <div>
        <div className="card" onClick={this.props.openModal} isOpen={this.props.isOpen} >
        <div className={this.state.iconClass} onClick={this.togglePreference} >{Heart}</div>
          <img className="card-box-img" src={this.props.url} alt={`${this.props.title} image`} />
          <p className="hidden">{this.props.index}</p>
          <p id="strong" className="margin-auto">{this.props.title}</p>
          <p className="margin-auto">{this.props.author}</p>
          <p id="tag" className="margin-auto">{this.props.type}</p>
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

//  <ModalBS title={this.props.title} url={this.props.url} author={this.props.author} introductionText={this.props.introductionText} content={this.props.content} pageNumber={this.props.pageNumber} tag={this.props.tag} type2={this.props.type2} />