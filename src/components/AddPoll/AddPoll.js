import React from 'react';
import { connect } from 'react-redux';
import b_ from 'b_';
import './AddPoll.css';

const b = b_.with('');

class AddPoll extends React.Component {
  render() {
    return <div className={b()}>Добавить опрос</div>;
  }
}

export default connect(state => ({}))(AddPoll);
