/*
 * 生成strore
 * createStore(reducers,initialState)
 * */

import { createStore } from 'redux'
import reducers from '../reducers'

export default function store(initialState) {
  let store = createStore(reducers, initialState)
  return store
}