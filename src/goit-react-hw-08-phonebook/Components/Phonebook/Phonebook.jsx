import React, { Component } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

import Toolbar from '../Toolbar';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import Content from '../Content';

import { themeSelectors } from '../../modules/theme';
import { authSelectors, authOperations } from '../../modules/auth';

import { connect } from 'react-redux';

class Phonebook extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    const { theme, isLogged } = this.props;
    return (
      <>
        <div className="conteiner-pb" style={{ background: theme.themeConfig.conteinerBg }}>
          <Toolbar />
          <header>
            <Navigation />
            {isLogged && <UserMenu />}
          </header>
          <Content />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: themeSelectors.getTheme(state),
  isLogged: authSelectors.isAuthenticated(state),
});

const mapDispatchToProps = { onGetCurrentUser: authOperations.getCurrentUser };

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
