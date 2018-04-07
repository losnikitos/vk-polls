import {combineReducers} from 'redux';
import app from './app';
import user from './user';
import polls from './polls';

export default combineReducers({app, user, polls});
