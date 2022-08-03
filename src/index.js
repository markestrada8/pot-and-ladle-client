import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
// import dotenv from 'dotenv';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';

import reducers from './redux/reducers/index';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
// console.log(clientId);
ReactDOM.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </Provider>,
  document.getElementById('root')
);
