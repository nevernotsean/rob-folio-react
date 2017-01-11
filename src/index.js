import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Routes from './routes.js';

// local assets
import './assets/stylesheets/foundation.min.css';
import './assets/stylesheets/index.css';
import './assets/stylesheets/navigation.css';

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
