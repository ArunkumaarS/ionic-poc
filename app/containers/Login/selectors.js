import { createSelector } from 'reselect';
import initialJSState from './initialState';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = (state) => state.login || initialJSState;

/**
 * Other specific selectors
 */


/**
 * Default selector used by Login
 */

const makeSelectLogin = () => createSelector(
  selectLoginDomain,
  (substate) => substate.toJS()
);

export default makeSelectLogin;
export {
  selectLoginDomain,
};
