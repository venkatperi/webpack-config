// @flow

import React, { Component } from 'react';

type Props = {
  increase: number,
};

export default class Counter extends Component {
  static defaultProps = {
    increase: 1,
  }

  constructor(props: Props) {
    super(props);
    this.boundHandleClick = this.handleClick.bind(this);
  }

  state = {
    count: 0,
  }

  props: Props;
  boundHandleClick: Function;

  handleClick() {
    this.setState({
      count: this.state.count + this.props.increase,
    });
  }

  render() {
    return (
      <div>
        <p>The button has been clicked {this.state.count} times.</p>
        <button onClick={this.boundHandleClick}>+{this.props.increase}</button>
      </div>
    );
  }
}
