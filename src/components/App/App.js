import React from 'react';
import Header from 'components/Header/Header';
import './App.css';
import {connect} from 'react-redux';
import Poll from 'components/Poll/Poll';

class App extends React.Component {
    render() {
        const {polls} = this.props;
        return (
            <div>
                <Header/>
                {polls.map(poll => <Poll poll={poll}/>)}
            </div>

        )
    }
}

export default connect((state) => ({
    polls: state.polls.list.map(id => state.polls.byID[id])
}))(App);
