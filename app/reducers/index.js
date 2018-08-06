/*
* 定义规则
* combineReducers 分割合并管理多个reducers
* */

import { combineReducers } from 'redux'
import userInfo from './userInfo'

const reducers = combineReducers({
  userInfo
});

export default reducers;