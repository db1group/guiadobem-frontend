import React from "react";
import ReactGA from "react-ga";
import "./App.css";
import Routes from "./Routes";

function initializeAnalytics() {
  ReactGA.initialize("UA-165847257-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function App() {
  initializeAnalytics();
  return <Routes />;
}

export default App;
