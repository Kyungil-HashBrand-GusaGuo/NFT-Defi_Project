import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

// import { createStore, combineReducers } from 'redux';
// import  setChips  from '../redux/reducer/BlackBetReducer';
// const rootReducer = combineReducers({ setChips });
// const store = createStore(rootReducer);

// const rootReducer = combineReducers({ setChips });
// const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
serviceWorker.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

