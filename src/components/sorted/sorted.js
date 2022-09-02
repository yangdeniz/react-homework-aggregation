import React from 'react';
import SortOrder from './sort-order';

function sorted(Component, keySelector, sortOrder = SortOrder.asc) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.keySelector = keySelector;
      this.sortOrder = sortOrder;
    }

    sort(data) {
      const sorted = data.sort((a, b) => {
        if (this.keySelector(a) > this.keySelector(b)) {
          return 1;
        }
        if (this.keySelector(b) > this.keySelector(a)) {
          return -1;
        }
        return 0;
      });
      return this.sortOrder === SortOrder.desc ? sorted.reverse() : sorted;
    }

    render() {
      return (
        <Component {...this.props} list={this.sort(this.props.list)} />
      );
    }
  }
}

export default sorted;