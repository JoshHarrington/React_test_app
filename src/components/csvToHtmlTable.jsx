import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import Moment from 'react-moment';
import * as titleCase from 'title-case';
import { parseCsvToRowsAndColumn } from './utils';


class CsvToHtmlTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTableHeader = (row) => {
    const lesionPhoto = row.splice(5, 1)[0];
    if (row) {
      row.forEach(function(column, i) {
        let columnHeader = row[i];
        row[i] = titleCase(columnHeader);
      });
      return (<thead>
        <tr>
          {
            map(row, (column, i) => {
            return (<th key={`${i}${column}`}>{column}</th>);
            })
          }
        </tr>
      </thead>);
    }
  };

  renderTableBody = (rows) => {
    rows.forEach(function(row) {

      const photoToDelete = row.splice(5, 1)[0];

      const dateCreated = row[1];
      row[1] = moment.unix(dateCreated).format("DD/MM/YYYY");
      const dateUpdated = row[2];
      row[2] = moment.unix(dateUpdated).format("DD/MM/YYYY");

      const status = row[3];
      row[3] = titleCase(status);
      const refStatus = row[4];
      row[4] = titleCase(refStatus);

    });
    return (
      <tbody>
      {
        map(rows, (row, i) => (
          <tr className={this.props.tableRowClassName} key={i} onClick={this.onItemClick}>
          {
            map(row, (column, j) => (
              <td className={this.props.tableColumnClassName} key={`${j}${column}`}><Link to={`/cases/${i+1}`}>{column}</Link></td>
            ))
          }
          </tr>
        ))
      }
      </tbody>)
  };

  render() {
    const rowsWithColumns = parseCsvToRowsAndColumn(this.props.data.trim(), this.props.csvDelimiter);

    let headerRow = undefined;
    if (this.props.hasHeader) {
      headerRow = rowsWithColumns.splice(0, 1)[0];
    }


    return (
      <table className={`csv-html-table ${this.props.tableClassName}`}>
        {this.renderTableHeader(headerRow)}
        {this.renderTableBody(rowsWithColumns)}
      </table>);
  }
}


CsvToHtmlTable.defaultProps = {
  data: '',
  hasHeader: true,
  csvDelimiter: '\t',
  tableClassName: '',
  tableRowClassName: '',
  tableColumnClassName: '',
};

CsvToHtmlTable.propTypes = {
  data: PropTypes.string.isRequired,
  hasHeader: PropTypes.bool,
  csvDelimiter: PropTypes.string,
  tableClassName: PropTypes.string,
  tableRowClassName: PropTypes.string,
  tableColumnClassName: PropTypes.string,
};

export default CsvToHtmlTable;

export { CsvToHtmlTable };
