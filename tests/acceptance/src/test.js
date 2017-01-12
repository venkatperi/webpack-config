/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import React, { Component } from 'react';
import test from './test.svg';

export default class Test extends Component {
  static propTypes = {};

  render() {
    return (
      <div>{test}</div>
    );
  }
}
