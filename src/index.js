import React from "react";
import ReactDOM from "react-dom";
import About from './about';
import Home from './home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./styles.scss";

const App = () => {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
