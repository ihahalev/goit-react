import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { actionBtn } from '../materialStyles';

import { authOperations, authSelectors } from '../../modules/auth';

const UserMenu = ({ email, onLogout }) => {
  // const classes = actionBtn();
  return (
    <div className="start-list">
      <p className="NavLink user-name">{email}</p>
      <Button variant="contained" color="primary" onClick={() => onLogout()} style={actionBtn}>
        Log Out
      </Button>
      {/* <button className="actionBtn" onClick={() => onLogout()}>
      Log Out
    </button> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = { onLogout: authOperations.logOut };

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
