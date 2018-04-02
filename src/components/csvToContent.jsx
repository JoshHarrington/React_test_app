import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import Timestamp from 'react-timestamp';

import { parseCsvToRowsAndColumn } from './utils';

class CsvToContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTableBody = (rows) => {

		const id = rows.splice(0, 1)[0];
		const dateCreated = rows.splice(0, 1)[0];
		const dateUpdated = rows.splice(0, 1)[0];
		const status = rows.splice(0, 1)[0];
		const refStatus = rows.splice(0, 1)[0];
		const lesionPhoto = rows.splice(0, 1)[0];

		console.log(id);
		console.log(dateCreated);
		console.log(dateUpdated);
		console.log(status);
		console.log(refStatus);
		console.log(lesionPhoto);

		return (
			<div>
				<p>ID: {id}</p>
				<p>Status: {status}</p>
				<img src={lesionPhoto} width="100%"/>
				<Timestamp time={dateCreated} format="date"/>
				<br/>
				<Timestamp time={dateUpdated} format="date"/>
				<p>Refer Status: {refStatus}</p>
			</div>
		);

	};


  render() {
    const rowsWithColumns = parseCsvToRowsAndColumn(this.props.data.trim(), this.props.csvDelimiter);
		const rowPick = this.props.caseId - 1;
		const rowPickContent = rowsWithColumns[rowPick];

    return (
      <div>
        {this.props.data && this.state && this.renderTableBody(rowPickContent)}
      </div>);
  }
}


CsvToContent.defaultProps = {
  data: '',
  hasHeader: true,
  csvDelimiter: '\t',
  caseId: '',
  tableClassName: '',
  tableRowClassName: '',
  tableColumnClassName: '',
};

CsvToContent.propTypes = {
  data: PropTypes.string.isRequired,
  hasHeader: PropTypes.bool,
  csvDelimiter: PropTypes.string,
  caseId: PropTypes.string,
  tableClassName: PropTypes.string,
  tableRowClassName: PropTypes.string,
  tableColumnClassName: PropTypes.string,
};

export default CsvToContent;

export { CsvToContent };
