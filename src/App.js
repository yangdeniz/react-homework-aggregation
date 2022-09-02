import React from 'react';
import MonthTable from './components/table/month-table';
import SortTable from './components/table/sort-table';
import YearTable from './components/table/year-table';

export default class App extends React.Component {
  state = {
    list: []
  };

  fetchData() {
    fetch(process.env.REACT_APP_DATA_URL)
      .then(response => response.json())
      .then(data => this.setState({ ...data }));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const {list} = this.state;
    return (
      <div id="app">
        <MonthTable list={list} />
        <YearTable list={list} />
        <SortTable list={list} />
      </div>
    );
  }
}