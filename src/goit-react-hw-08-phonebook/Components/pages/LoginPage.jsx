import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { addBtn, InputText } from '../materialStyles';

import { authOperations } from '../../modules/auth';
import { themeSelectors } from '../../modules/theme';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({
      email: this.state.email,
      password: this.state.password,
    });

    this.setState({
      email: '',
      password: '',
    });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { theme } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="phonebook-form" style={{ background: theme.themeConfig.formBg }}>
        <InputText
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={this.handleInputChange}
          autoFocus
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
          Log in
        </Button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: themeSelectors.getTheme(state),
});

const mapDispatchToProps = { onRegister: authOperations.logIn };

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
