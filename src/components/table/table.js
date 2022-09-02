function Table(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <table>
        <thead>
          <tr>
            <th>{props.keyColumn}</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.children}
        </tbody>
      </table>
    </div>
  );
}

export default Table;