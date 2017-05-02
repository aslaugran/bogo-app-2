import React from 'react';
import ReactDOM from 'react-dom';

// Styles
import '../dist/grid.css';
import '../dist/swiper.css';
import '../dist/style.css';


// routes
import routes from './router';


// Render
ReactDOM.render(
  routes,
  document.getElementById('root')
);
