import React from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'

// Components
import App from './Components/App';
import Home from './Components/Home';
import Tours from './Components/Tours';
import SingleTour from './Components/SingleTour';
import Cart from './Components/Cart';
const tours = [];

const routes = (
  <Router>
    <div>
      <App>
        <Route exact path="/" component={Home}/>
          <Route path="/tours/:category" component={Tours}/>
          <Route path="/tour/:tour" component={SingleTour}/>
          <Route path="/cart" component={Cart}/>
    </App>
  </div>
  </Router>
);

export default routes;
