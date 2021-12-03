import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import MainContainer from './components/MainContainer';
import BeersContainer from './components/BeersContainer'
import './index.css';
import store from './redux/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>
    <MainContainer />
    <BeersContainer/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
