import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import * as titleCase from 'title-case';
import { parseCsvToRowsAndColumn } from './utils';

class CsvToContent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTableBody = (rows) => {

		const id = rows[0];
		const dateCreated = rows[1];
		const dateUpdated = rows[2];
		let status = rows[3];
		status = titleCase(status);
		let refStatus = rows[4];
		refStatus = titleCase(refStatus);
		const lesionPhoto = rows[5];

		return (
			<div className="caseBlock">
				<div className="caseImg-container">
					<img src={lesionPhoto} width="100%" className="caseImg" alt={`Lesion inspection for Case number ${id}`}/>
				</div>
				<div className="caseContent-container">
					<p><span className="caseContent-title">Case Number:</span><br/>{id}</p>
					<p><span className="caseContent-title">Status:</span><br/>{status}</p>
					<p><span className="caseContent-title">Date Created:</span><br/><Moment format="DD/MM/YYYY" unix date={dateCreated} /></p>
					<p><span className="caseContent-title">Date Updated:</span><br/><Moment format="DD/MM/YYYY" unix date={dateUpdated} /></p>
					<p><span className="caseContent-title">Refer Status:</span><br/>{refStatus}</p>
				</div>
			</div>
		);

	};

  render() {
    const rowsWithColumns = parseCsvToRowsAndColumn(this.props.data.trim(), this.props.csvDelimiter);
		const rowPick = this.props.caseId;
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
