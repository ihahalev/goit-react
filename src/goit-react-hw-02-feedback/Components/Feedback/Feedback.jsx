import React, { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from '../Section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleButton = (feedbackType) => {
    this.setState((prevState) => {
      return { ...prevState, [feedbackType]: prevState[feedbackType] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => total + value, 0);
  };

  countPositiveFeedbackPercentage = (total, value) => {
    return Math.round((100 * value) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage(total, good);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.handleButton} />
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={percent} />
        </Section>
      </div>
    );
  }
}

export default Feedback;
