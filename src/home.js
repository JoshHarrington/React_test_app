import React from 'react';
import { CsvToHtmlTable } from './components/csvToHtmlTable';
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

		const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

		const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
				v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
				)(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

		// do the work...
		document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
				const table = th.closest('table');
				Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
						.sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
						.forEach(tr => table.appendChild(tr) );
		})));
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
