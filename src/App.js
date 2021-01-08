import React, { Component } from 'react';
import Container from './Components/Container';
import Section from './Components/Section';
import Controls from './Components/Controls';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? +((good / total) * 100).toFixed(0) : 0;
  };

  handleFeedback = ({ target }) => {
    const feedbackType = target.dataset.action;
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
    target.blur();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];

    return (
      <Container>
        <Section title="Please leave feedback">
          <Controls options={options} clickHandler={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percent={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
