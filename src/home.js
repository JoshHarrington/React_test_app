import React from 'react';
import { CsvToHtmlTable } from './components/csvToHtmlTable';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

class Home extends React.Component {

	state = {
    casesCSV: ''
	}

	// change to Will Mount?
  componentDidMount() {
    axios.get(`http://localhost:3000/cases.csv`)
      .then(res => {
        const casesCSV = res.data;
        this.setState({ casesCSV });
      })
  }

  render() {
    return (
			<div>
				<CsvToHtmlTable
					data={this.state.casesCSV}
					csvDelimiter=","
					/>
			</div>
		);
  }
}


export default Home;

export { Home };
