import React from 'react';
import { connect } from 'react-redux';
import { Position, Toaster } from '@blueprintjs/core';

class Error extends React.Component {
  render() {
    return <Toaster position={Position.TOP} ref={ref => (this.toaster = ref)} />;
  }

  componentDidUpdate(oldProps) {
    if (this.props.errors.length > oldProps.errors.length) {
      const lastError = this.props.errors[this.props.errors.length - 1];
      const { err, type } = lastError;
      const { message } = err;
      this.toaster.show({ intent: 'danger', message: `${type}: ${message}` });
    }
  }
}

export default connect(state => ({ errors: state.errors }))(Error);
