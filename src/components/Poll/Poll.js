import React from 'react';
import {connect} from 'react-redux';
import b_ from 'b_';
import './Poll.css'

const b = b_.with('poll');

export default class Poll extends React.Component {
    render() {
        const {poll} = this.props;
        const {question, options} = poll;


        return (
            <div className={b()}>
                <div className={b('question')}>{question}</div>
                {/*{options.map(option => {*/}
                    {/*return (<div className={b('option')}>{option.text}</div>)*/}
                {/*})}*/}
            </div>
        );
    }
}

