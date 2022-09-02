import moment from 'moment';
import grouped from '../grouped/grouped';
import sorted from '../sorted/sorted';
import Table from './table';

function RawYearTable(props) {
  console.log('YearTable', props);
  return (
    <Table title='Year Table' keyColumn='Year'>
      {props.list.map(item => (
        <tr key={props.list.indexOf(item)}>
          <td>{item.year}</td>
          <td>{item.amount}</td>
        </tr>
      ))}
    </Table>
  );
}

const YearTable = grouped(
  sorted(
    RawYearTable,
    item => item.year
  ),
  item => moment(item.date).year(),
  'year'
);

export default YearTable;