import React from 'react';
import ReactDOM from 'react-dom';
import './theme/responsive/index.css';
import App from './theme/App';
import * as serviceWorker from './serviceWorker';
import './theme/responsive/App.css';
import './theme/responsive/main.css';
import './theme/responsive/font.css';
import './theme/lib/misc/center.css';

var href = window.location.pathname;
  goH(App);
function goH(AB){
  ReactDOM.render(
    <React.StrictMode>
      <AB />
    </React.StrictMode>,
    document.getElementById('root')
  );     
} 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
