import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        <p style={{ color: theme.themeConfig.fontColor }}>Name</p>
        <input type="text" name="name" value={name} onChange={this.handleInputChange} autoFocus />
        <p style={{ color: theme.themeConfig.fontColor }}>Email</p>
        <input type="email" name="email" value={email} onChange={this.handleInputChange} />
        <p style={{ color: theme.themeConfig.fontColor }}>Password</p>
        <input type="password" name="password" value={password} onChange={this.handleInputChange} />
        <button type="submit" className="add">
          Register
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: themeSelectors.getTheme(state),
});

const mapDispatchToProps = { onRegister: authOperations.register };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
