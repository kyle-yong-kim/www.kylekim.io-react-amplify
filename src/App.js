import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.scss';
// import './js/dynamicActions'; // to run dynamicActions js
// import './js/freelancer';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import { PortfolioModal } from './components/PortfolioModal';
import PortfolioItem from './components/PortfolioItem';
import workexperiences from './data/workexperiences.json';
import noScroll from 'no-scroll'; // LOL for some reason, I don't need noScroll anymore
import { Navbar } from './components/Navbar/Navbar';
import { Redirect } from 'react-router'; // delete this package
import { useHistory } from "react-router-dom"; // delete this package
import Fade from 'react-reveal/Fade';
import Globe from 'react-globe.gl'; // delete this package
import Podcast from './Podcast';
import Home from './Home';
import ErrorPage from './ErrorPage';
import ScrollToTop from './components/ScrollToTop';
import resumePDF from './KKim_Resume.pdf';
import { createBrowserHistory } from 'history'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

function App() {

  return (
    <Router>
      <ScrollToTop />
      <header id="page-top"></header>
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/earlyaccess/jejumyeongjo.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Song%20Myung" rel="stylesheet" />
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/podcast" exact component={Podcast} />
          <Route path="/podcast/" exact component={Podcast} />
          <Route path="*" exact component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
