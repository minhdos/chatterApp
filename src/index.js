import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Div100vh from 'react-div-100vh'


ReactDOM.render(
  <React.StrictMode>
    <Div100vh>
      <App />
    </Div100vh>
  </React.StrictMode>,
  document.getElementById('root')
);


