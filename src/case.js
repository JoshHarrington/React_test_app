import React from 'react';
import { Route } from 'react-router-dom';
import { CsvToContent } from './components/csvToContent';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Case extends React.Component {

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
			<div>
				<Link to="/" className="case-home-link">{`< `}Home button</Link>
				<CsvToContent
					data={this.state.casesCSV}
					csvDelimiter=","
					caseId={this.props.match.params.caseId}
					/>
			</div>
		);
  }
}


export default Case;

export { Case };
