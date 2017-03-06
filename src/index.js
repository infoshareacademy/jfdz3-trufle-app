import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {Router, Route, hashHistory} from 'react-router';
import {Page404} from './Components/SlawekComponents/page404';
import {RozkladJazdy} from './Components/SlawekComponents/RozkladJazdy'


ReactDOM.render(

    <Router history={hashHistory}>
      <Route path = "/" component = {App}/>
      <Route path = "/rozklad-jazdy" component = {RozkladJazdy}/>
      <Route path = "*" component = {Page404}/>
    </Router>
    ,
  document.getElementById('root')
);
