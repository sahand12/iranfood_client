// @flow
import React from 'react';
import {Route} from 'react-router-dom';
import {HomePage} from './pages/public/home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss';

const App = () => (
  <div className="fb-app">
    <Route exact path="/" component={HomePage} />
  </div>
);

export default App;
