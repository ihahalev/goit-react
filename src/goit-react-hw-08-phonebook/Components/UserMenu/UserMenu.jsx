import React from 'react';
import { connect } from 'react-redux';

import { authOperations, authSelectors } from '../../modules/auth';

const UserMenu = ({ email, onLogout }) => (
  <div className="start-list">
    <p className="NavLink user-name">{email}</p>
    <button className="actionBtn" onClick={() => onLogout()}>
      Log Out
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = { onLogout: authOperations.logOut };

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
