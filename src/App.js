import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';
import CsvToContent from './case';


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cases/:caseId" component={CsvToContent}/>
        </Switch>
      </Router>
    );
  }
}


export default App;
