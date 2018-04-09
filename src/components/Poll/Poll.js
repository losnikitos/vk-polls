import React from 'react';
import { connect } from 'react-redux';
import b_ from 'b_';
import './Poll.css';
import { Button, Card, Elevation, ProgressBar } from '@blueprintjs/core';

const b = b_.with('poll');

const Answers = ({ answers }) => (
  <div className={b('answers')}>
    {answers.map(answer => {
      return (
        <div className={b('answer')} key={answer.id}>
          <img src={answer.user.photo} />
        </div>
      );
    })}
  </div>
);

class Poll extends React.Component {
  render() {
    const { poll } = this.props;
    const { question, options } = poll;

    let totalAnswers = 0;
    options.forEach(option => {
      totalAnswers += option.answers.length;
    });

    return (
      <Card className={b()}>
        <div className={b('question')} key={question.id}>
          {question}
        </div>
        {options.map(option => {
          const share = totalAnswers ? option.answers.length / totalAnswers : 0;
          const sharePercent = `${(share * 100).toFixed(2)}%`;

          return (
            <div className={b('option')} key={option.id}>
              <div className={b('left')}>
                <div className={b('title')}>{option.text}</div>
                <ProgressBar value={share} className="pt-no-stripes" />
                <div className={b('below')}>
                  <Answers answers={option.answers} />
                  <div className={b('percent')}>{sharePercent}</div>
                </div>
              </div>
              <div className={b('right')}>
                <Button onClick={() => this.vote(option)}>+1</Button>
              </div>
            </div>
          );
        })}
      </Card>
    );
  }

  vote = option => {
    const { dispatch } = this.props;
    dispatch({ type: 'VOTE', option });
  };
}

export default connect()(Poll);
