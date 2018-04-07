import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/ru';
import App from './components/App/App';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

moment.locale('ru');

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

store.dispatch({type: 'INIT', user: USER});

function render() {
    const root = document.querySelector('#root');
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>, root);
}

window.addEventListener('load', () => render());
