import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

var WebFont = require('webfontloader');

WebFont.load({
  google: {
    families: ['Pacifico', 'Roboto Slab']
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
