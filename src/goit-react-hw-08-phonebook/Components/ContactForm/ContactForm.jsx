import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { addBtn, InputText } from '../materialStyles';

import { contactsOperations } from '../../modules/contacts';
import { themeSelectors } from '../../modules/theme';

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
        <InputText
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          value={name}
          onChange={this.handleInputChange}
          autoFocus
        />
        <InputText
          id="outlined-basic"
          label="Number"
          variant="outlined"
          type="number"
          name="number"
          value={number}
          onChange={this.handleInputChange}
        />
        <Button variant="contained" color="primary" type="submit" style={addBtn}>
          Add contact
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: themeSelectors.getTheme(state),
});

const mapDispatchToProps = { onAdd: contactsOperations.addContact };

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
