import React from 'react';
import { connect } from 'react-redux';
import b_ from 'b_';
import './AddPoll.css';
import { TextArea, Card, Button } from '@blueprintjs/core';
import { EditableText } from '@blueprintjs/core/lib/cjs/components/editable-text/editableText';

const b = b_.with('add-poll');

class AddPoll extends React.Component {
  state = { value: '' };

  addPoll = () => {
    const { dispatch } = this.props;
    const { value } = this.state;
    dispatch({ type: 'ADD_POLL', text: value });
    // this.setState({ value: '' });
  };

  render() {
    return (
      <Card className={b('')}>
        <h1>Создать опрос</h1>
        <EditableText
          maxLines={12}
          minLines={5}
          multiline
          placeholder={`Вопрос в первой строке\n- а потом\n- несколько\n- вариантов\n- ответа`}
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
        <div className={b('submit')}>
          <Button onClick={this.addPoll}>Добавить</Button>
        </div>
      </Card>
    );
  }
}

export default connect()(AddPoll);
