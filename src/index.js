import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {legacy_createStore as createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/indexReducer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <Routes>
      <Route path='/rgcmovieflix' Component={App} />
      <Route path='/rgcmovieflix/movie/:id' Component={App} />
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);
