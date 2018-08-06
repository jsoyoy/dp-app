import React from 'react'
import { render } from 'react-dom'
import { Provider } from  'react-redux'
import store from './store'
import Hello from './containers/Hello'

import './static/css/commen.less';

render (
  <Provider store={store()}>
    <Hello />
  </Provider>,
  document.getElementById('root')
);