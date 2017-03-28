import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {Router, Route, browserHistory} from 'react-router';
import {Page404} from './Components/SlawekComponents/page404';
import {RozkladJazdy} from './Components/SlawekComponents/RozkladJazdy';
import {TrufleMainApp} from './Components/TrufleMainApp/TrufleMainApp';
import TravelPlanner from './Components/TrufleMainApp/TravelPlanner';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/main-app" component={TrufleMainApp}/>
    <Route path="/main-app/rozklad-jazdy" component={RozkladJazdy}/>
    <Route path="/main-app/travel-planner" component={TravelPlanner}/>
    <Route path="*" component={Page404}/>
  </Router>
  ,
  document.getElementById('root')
);
