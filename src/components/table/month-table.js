import moment from 'moment';
import filtered from '../filtered/filtered';
import grouped from '../grouped/grouped';
import mapped from '../mapped/mapped';
import sorted from '../sorted/sorted';
import Table from './table';

function RawMonthTable(props) {
  console.log('MonthTable', props);
  return (
    <Table title='Month Table' keyColumn='Month'>
      {props.list.map(item => (
        <tr key={props.list.indexOf(item)}>
          <td>{item.month}</td>
          <td>{item.amount}</td>
        </tr>
      ))}
    </Table>
  )
}

const MonthTable = filtered(
  grouped(
    sorted(
      mapped(
        RawMonthTable,
        item => ({ ...item, month: moment(item.month + 1, 'MM').format('MMM') })
      ),
      item => item.month
    ),
    item => moment(item.date).month(),
    'month'
  ),
  item => moment(item.date).year() === moment().year()
);

export default MonthTable;