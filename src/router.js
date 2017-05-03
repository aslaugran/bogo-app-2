import React from "react";
import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from "react-router-dom";

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
import Cart from "./Components/Cart";
>>>>>>> 5f8439031c2c9e8585d65aff6438523f18052619
const tours = [];

const routes = (
  <Router>
    <div>
      <App>
<<<<<<< HEAD
        <Route exact path="/" component={Home}/>
          <Route path="/tours/:category" component={Tours}/>
          <Route path="/tour/:tour" component={SingleTour}/>
          <Route path="/cart" component={Cart}/>
    </App>
  </div>
=======
        <Route exact path="/" component={Home} />
        <Route path="/tours/:category" component={Tours} />
        <Route path="/cart" component={Cart} />
      </App>
    </div>
>>>>>>> 5f8439031c2c9e8585d65aff6438523f18052619
  </Router>
);

export default routes;
