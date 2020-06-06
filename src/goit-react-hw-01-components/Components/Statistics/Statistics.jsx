import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';

function Statistics({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && <h2 class={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={styles.item}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({ id: PropTypes.string, label: PropTypes.string, percentage: PropTypes.number }),
  ).isRequired,
};

export default Statistics;
