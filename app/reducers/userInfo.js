/**
 * 定义计算规则
 */
import * as actionTypes from '../constants/userinfo'

export default function userInfo(state = {}, action) {
  switch (action.type) {
    case actionTypes.USERINFO_LOGIN:
      return action.data;
      break;
    case actionTypes.UPDATE_CITYNAME:
      return action.data;
      break;
    default:
      return state;
  }
  return state;
};
