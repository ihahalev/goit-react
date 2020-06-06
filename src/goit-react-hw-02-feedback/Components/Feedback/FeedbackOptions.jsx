import React from 'react';
import styles from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {Object.keys(options).map((key) => (
      <button key={key} onClick={() => onLeaveFeedback(key)} className={styles.button}>
        {key}
      </button>
    ))}
  </>
);

export default FeedbackOptions;
