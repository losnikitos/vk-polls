import React from 'react';
import Header from 'components/Header/Header';
import './App.css';
import { connect } from 'react-redux';
import Poll from 'components/Poll/Poll';
import Error from 'components/Error/Error';
import AddPoll from 'components/AddPoll/AddPoll';

class App extends React.Component {
  render() {
    const { polls } = this.props;
    return (
      <div>
        <Error />
        <Header />
        <div className="app__content">
          {polls.map(poll => <Poll poll={poll} />)}
          <AddPoll />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  polls: state.polls.list.map(id => state.polls.byID[id])
}))(App);
