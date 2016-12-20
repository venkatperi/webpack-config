import React, { Component, PropTypes } from 'react';
import test from './test.svg';

export default class Test extends Component {
  static propTypes = {};

  render() {
    return (
      <div>{test}</div>
    );
  }
}
