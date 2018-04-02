import { map } from 'lodash';

/**
 * Converts CSV to HTML Table
 *
 */

export function parseCsvToRowsAndColumn(csvText, csvColumnDelimiter = '\t') {
    const rows = csvText.split('\n');
    const rowsWithColumns = map(rows, (row) => {
        return row.split(csvColumnDelimiter);
    });

    return rowsWithColumns;
}

export function csvToJson(csvText, csvColumnDelimiter = '\t') {
  const lines = csvText.split('\n');
  let result = [];
	let headers = lines[0].trim().split(csvColumnDelimiter);
	// eslint-disable-next-line
	headers.splice(5, 1)[0];

  for(var i=1; i<lines.length; i++){

	  let obj = {};
		let currentline = lines[i].trim().split(csvColumnDelimiter);
		// eslint-disable-next-line
		currentline.splice(5, 1)[0];

	  for(let j=0; j<headers.length; j++){
		  obj[headers[j]] = currentline[j];
		}

	  result.push(obj);
	}

	// eslint-disable-next-line
	Object.keys(result).map(function(key) {
		return [Number(key), result[key]];
	});


}
