import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAdd({
      name: this.state.name,
      number: this.state.number,
    });

    this.setState({
      name: '',
      number: '',
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <p>Name</p>
        <input type="text" name="name" value={name} onChange={this.handleInputChange} />
        <p>Number</p>
        <input type="text" name="number" value={number} onChange={this.handleInputChange} />
        <br />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
