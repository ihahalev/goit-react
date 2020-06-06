import React from 'react';

const Notification = ({ message }) => <p>{message}</p>;

Notification.defaultProps = {
  message: '',
};

export default Notification;
