import React from 'react';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom'

// Components
<<<<<<< HEAD
import App from './Components/App';
import Home from './Components/Home';
import Tours from './Components/Tours';
import SingleTour from './Components/SingleTour';
import Cart from './Components/Cart';
=======
import App from "./Components/App";
import Home from "./Components/Home";
import Tours from "./Components/Tours";
import SingleTour from "./Components/SingleTour";
import Cart from "./Components/Cart";

>>>>>>> 7d7f49f5315503906a3fe3e757e9c1b458630e82
const tours = [];

const routes = (
  <Router>
    <div>
<<<<<<< HEAD
        <Route exact path="/" component={Home}/>
        <Route path="/tours/:category" component={Tours}/>
        <Route path="/tour/:tour" component={SingleTour}/>
        <Route path="/cart" component={Cart}/>
  </div>
=======
      <App>
        <Route exact path="/" component={Home} />
        <Route path="/tours/:category" component={Tours} />
        <Route path="/tour/:tour" component={SingleTour} />
        <Route path="/cart" component={Cart} />
      </App>
    </div>

>>>>>>> 7d7f49f5315503906a3fe3e757e9c1b458630e82
  </Router>
);

export default routes;
