import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { addBtn, InputText } from '../materialStyles';

import { authOperations } from '../../modules/auth';
import { themeSelectors } from '../../modules/theme';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });

    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, email, password } = this.state;
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
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={this.handleInputChange}
        />
        <InputText
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          value={password}
          onChange={this.handleInputChange}
        />
        <Button variant="contained" color="primary" type="submit" style={addBtn}>
          Register
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: themeSelectors.getTheme(state),
});

const mapDispatchToProps = { onRegister: authOperations.register };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
