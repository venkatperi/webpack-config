// @flow

import React from 'react';
import { render } from 'react-dom';
import Counter from './Components/Counter';

render(<Counter />, document.getElementById('app'));

render(<Counter increase={2} />, document.getElementById('app-increase-2'));
