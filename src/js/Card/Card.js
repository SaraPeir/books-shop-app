import React, { Component } from 'react';
import './Card.css';
import ModalBS from '../Modal/Modal';

class Card extends Component {
  render() {
    return (
      <div>
        <div className="card" onClick={this.props.openModal} isOpen={this.props.isOpen} >
          <img className="card-box-img" src={this.props.url} alt={`${this.props.title} image`} />
          <p id="strong">{this.props.title}</p>
          <p>{this.props.author}</p>
          <p id="tag">{this.props.type}</p>
          <ModalBS title={this.props.title} url={this.props.url} author={this.props.author} introductionText={this.props.introductionText} content={this.props.content} pageNumber={this.props.pageNumber} tag={this.props.tag} type2={this.props.type2} />
         
        </div>
      </div>
    );
  }
}

export default Card;

//  <ModalBS title={this.props.title} url={this.props.url} author={this.props.author} introductionText={this.props.introductionText} content={this.props.content} pageNumber={this.props.pageNumber} tag={this.props.tag} type2={this.props.type2} />