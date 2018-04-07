import React from 'react';
import b_ from 'b_';
import './Header.css';

import User from 'components/User/User';

const b = b_.with('header');

export default class Header extends React.Component {
    render() {
        return (
            <div className={b()}>
                <div className={b('left')}>Опросы VK</div>
                <div className={b('right')}><User/></div>
            </div>
        );
    }
}
