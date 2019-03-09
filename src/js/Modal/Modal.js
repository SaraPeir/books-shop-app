import React, { Component } from 'react';
import './Modal.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalBS extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toToggle = this.toToggle.bind(this);
  }

  toToggle() {
    const {modal} = this.state;
    this.setState({
      modal: !modal
    });
  }

  render() {
    return (
    <div>
      <div className="centering">
        <Button className="button" onClick={this.toToggle}>Más detalles</Button>
      </div>
      
      <Modal onClick={this.toToggle} isOpen={this.state.modal} toggle={this.toToggle} className={this.props.className}>
          <ModalHeader toggle={this.toToggle}><span className={'special-typo2'}>{this.props.author},</span> <span className={'special-typo'}>{this.props.title}</span></ModalHeader>
          <ModalBody onClick={this.toToggle} className={'container centering'}>
          <div className={'row'}>
            <div className={'col-12'}>
              <img className="img-style" src={this.props.url} alt={`${this.props.title} image`} />
            </div>
            <div className={'col-12  p-5'}>
              <p className={'special-typo'}>{this.props.introductionText}</p>
              <p>{this.props.content}</p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter toggle={this.toToggle}>{this.props.type2} - {this.props.pageNumber} páginas</ModalFooter>
      </Modal>
    </div>  
    );
  }
}

export default ModalBS;