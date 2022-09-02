import React from 'react';

function grouped(Component, keySelector, keyPropertyName) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.keySelector = keySelector;
      this.keyPropertyName = keyPropertyName;
    }

    group(data) {
      return data.reduce((prev, current) => {
        const key = this.keySelector(current);
        const existing = prev.find(item => item[`${this.keyPropertyName}`] === key);
        if (!existing) {
          prev.push({ [`${this.keyPropertyName}`]: key, amount: current.amount });
        }
        else {
          existing.amount += current.amount;
        }
        return prev;
      }, []);
    }

    render() {
      return (
        <Component {...this.props} list={this.group(this.props.list)} />
      );
    }
  }
}

export default grouped;