import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import { CsvToHtmlTable } from 'react-csv-to-table';
import { CsvToHtmlTable } from './components/csvToHtmlTable';
import axios from 'axios';


class App extends Component {

  state = {
    casesCSV: ''
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/cases.csv`)
      .then(res => {
        const casesCSV = res.data;
        this.setState({ casesCSV });
      })
  }


  render() {
    return (
      <Router>
        <div className="App">
          <CsvToHtmlTable
            data={this.state.casesCSV}
            csvDelimiter=","
          />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
