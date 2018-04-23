import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.js';

// allows module loading instead of reloading the page
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
