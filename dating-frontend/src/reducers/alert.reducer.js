import * as actionTypes from "../actions/actionTypes";

export default function alert(state = null, action) {
  switch (action.type) {
    case actionTypes.ALERT_SUCCESS:
      return {
        type: 'success',
        message: action.message
      };
    case actionTypes.ALERT_ERROR:
      return {
        type: 'error',
        message: action.message
      };
    case actionTypes.ALERT_WARNING:
      return {
        type: 'warning',
        message: action.message
      };
    case actionTypes.ALERT_INFO:
      return {
        type: 'info',
        message: action.message
      };
    case actionTypes.ALERT_CLEAR:
      return null;
    default:
      return state
  }
}