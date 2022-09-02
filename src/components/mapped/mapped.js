import React from 'react';

function mapped(Component, map) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.map = map;
    }

    mapData(data) {
      return data.map(item => this.map(item));
    }

    render() {
      return (
        <Component {...this.props} list={this.mapData(this.props.list)} />
      );
    }
  }
}

export default mapped;