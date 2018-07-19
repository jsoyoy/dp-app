import React from 'react'
import { render } from 'react-dom'

import './static/css/commen.less';

class Hello extends React.Component {
  render () {
    return (
      <h1>hello</h1>
    )
  }
}

render (
  <Hello/>,
  document.getElementById('root')
)