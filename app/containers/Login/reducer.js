/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import { UPDATE_FIELD } from './constants';
import initialJSState from './initialState';

const initialState = fromJS(initialJSState);

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return state
        .setIn(['loginForm', action.name, 'value'], action.val)
        .setIn(['loginForm', action.name, 'errorValue'], false);
    default:
      return state;
  }
}

export default loginReducer;
