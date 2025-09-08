import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.xsrfCookieName = 'csrftoken';
axios.xsrfHeaderName = 'X-CSRFToken';

ReactDOM.render(
  <Router>
    <App />
    </Router>,
  document.getElementById('app')
)