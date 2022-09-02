import moment from 'moment';
import SortOrder from '../sorted/sort-order';
import sorted from '../sorted/sorted';
import Table from './table';

function RawSortTable(props) {
  console.log('SortTable', props);
  return (
    <Table title='Sort Table' keyColumn='Date'>
      {props.list.map(item => (
        <tr key={props.list.indexOf(item)}>
          <td>{item.date}</td>
          <td>{item.amount}</td>
        </tr>
      ))}
    </Table>
  );
}

const SortTable = sorted(RawSortTable, item => moment(item.date), SortOrder.desc);

export default SortTable;