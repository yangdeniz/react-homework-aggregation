import React from 'react';

function filtered(Component, filter) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.filter = filter;
    }

    filterData(data) {
      return data.filter(item => this.filter(item));
    }

    render() {
      return (
        <Component {...this.props} list={this.filterData(this.props.list)} />
      );
    }
  }
}

export default filtered;