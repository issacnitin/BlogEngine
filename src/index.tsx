import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NewPost } from './NewPost';

var WebFont = require('webfontloader');

WebFont.load({
  google: {
    families: ['Pacifico', 'Roboto Slab']
  }
});

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path='/newpost' component={NewPost}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
