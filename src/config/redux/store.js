import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger'; //eslint-disable-line
// import createSocketIoMiddleware from 'redux-socket.io'; //eslint-disable-line
// import io from 'socket.io-client/dist/socket.io'; //eslint-disable-line

import reducer from './reducer';

// let socket = io('http://hitek.com.vn:5050', { jsonp: false }); //eslint-disable-line
// let socketIoMiddleware = createSocketIoMiddleware(socket, 'server/'); //eslint-disable-line

// const log = createLogger({ diff: true, collapsed: true });

const middlewares = [
  thunk
  // log,
  //  socketIoMiddleware
];

const enhancers = [];

// create store
const store = createStore(
  reducer,
  {},
  compose(
    applyMiddleware(...middlewares),
    ...enhancers
  )
);
export default store;
