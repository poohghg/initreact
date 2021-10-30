import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const test = () => {
  console.log('dasda');
  function name(params) {}
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
