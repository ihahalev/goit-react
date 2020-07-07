import React, { Component } from 'react';
import { connect } from 'react-redux';

import contacsActions from '../../modules/contacts/contactsActions';

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
    const { theme } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="phonebook-form" style={{ background: theme.themeConfig.formBg }}>
        <p style={{ color: theme.themeConfig.fontColor }}>Name</p>
        <input type="text" name="name" value={name} onChange={this.handleInputChange} autoFocus />
        <p style={{ color: theme.themeConfig.fontColor }}>Number</p>
        <input type="number" name="number" value={number} onChange={this.handleInputChange} />
        <button type="submit" className="add">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = { onAdd: contacsActions.addContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
