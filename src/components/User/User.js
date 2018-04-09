import React from 'react';
import { connect } from 'react-redux';
import b_ from 'b_';
import './User.css';

const b = b_.with('user');

class User extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) return <a href="/auth/vk">Войти через VK</a>;

    const { photo, first_name, last_name } = user;
    return (
      <div className={b()}>
        <div className={b('photo')}>
          <img src={photo} width={40} height={40} />
        </div>
        <div className={b('name')}>{`${first_name} ${last_name}`}</div>
      </div>
    );
  }
}

export default connect(state => ({ user: state.user }))(User);
