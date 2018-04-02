import React from 'react';
import { CsvToHtmlTable } from './components/csvToHtmlTable';
import axios from 'axios';
// import { csvToJson } from './components/utils';
// import ReactTable from 'react-table'

class Home extends React.Component {

	state = {
		casesCSV: ''
		// jsonTable: ''
	}

  componentDidMount() {
    axios.get(`http://localhost:3000/cases.csv`)
      .then(res => {
        const casesCSV = res.data;
				this.setState({ casesCSV });
				// const jsonTable = csvToJson(res.data.trim(), ',');
				// this.setState({ jsonTable });
			});
	}

	render() {


		/// *** Work below, in progress
		/// *** Sortable table element was going to be used
		/// *** but not working right now

		// if (this.state.jsonTable) {
		// 	console.log(this.state.jsonTable);
		// }

		// const columns = [{
		// 	Header: 'Case Number',
		// 	accessor: 'caseNumber'
		// }, {
		// 	Header: 'Date Created',
		// 	accessor: 'dateCreated'
		// }, {
		// 	Header: 'Date Update',
		// 	accessor: 'dateUpdated'
		// }, {
		// 	Header: 'Status',
		// 	accessor: 'status'
		// }, {
		// 	Header: 'Refer Status',
		// 	accessor: 'refer-status'
		// }];


    return (
			<div>
				{/* <ReactTable
					data={data}
					columns={columns}
				/> */}
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
