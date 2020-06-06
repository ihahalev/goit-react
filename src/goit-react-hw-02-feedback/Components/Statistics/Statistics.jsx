import React from 'react';
import PropTypes from 'prop-types';
import Total from './Total';
import Percentage from './Percentage';
import Notification from './Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total ? (
      <>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <Total value={total} />
        <Percentage value={positivePercentage} />
      </>
    ) : (
      <Notification message="No feedback given"></Notification>
    )}
  </>
);

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
