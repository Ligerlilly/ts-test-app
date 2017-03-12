import 'babel-polyfill';
import 'ts-helpers';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  App from './App';
import './index.css';
const { Router, Route, IndexRoute, browserHistory } = require('react-router')
const { Provider } =                                   require('react-redux')
const { getStore }                                           = require('./redux/store')
const store = getStore()
import HelloWorld from './pages/hello_world'
const { syncHistoryWithStore } = require('react-router-redux')

const history = syncHistoryWithStore(browserHistory, store)

const router = (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={HelloWorld} />
        </Route>
    </Router>
)

debugger

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>,
    document.getElementById('root')
)