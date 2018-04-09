import { combineReducers } from 'redux';
import app from './app';
import user from './user';
import polls from './polls';
import errors from './errors';

export default combineReducers({ app, user, polls, errors });
