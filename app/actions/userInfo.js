/**
 * 定义action 调用时触发改变
 * data 为新的赋值
 */
import * as actionTypes from '../constants/userinfo'

export function login(data) {
  return {
    type: actionTypes.USERINFO_LOGIN,
    data
  }
}

export function updateCityName(data) {
  return {
    type: actionTypes.UPDATE_CITYNAME,
    data
  }
}