import React, { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillMount() {
    window.releaseEvents('keydown', this.handleEscape);
  }

  handleEscape = (event) => {
    if (event.code !== 'Escape') {
      return;
    }
    this.props.onClose();
  };

  render() {
    return (
      <div className="Overlay" onClick={this.props.onClick}>
        <div className="Modal">
          <img src={this.props.largeImage} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
