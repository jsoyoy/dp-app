/*
* 入口文件
* 定义router，store
*
* */
import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import RouterMap from './router'
import './static/css/common.less'
import './static/css/font.css'

render (
  <RouterMap history={hashHistory}/>,
  document.getElementById('root')
)
