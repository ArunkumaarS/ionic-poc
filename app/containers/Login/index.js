/**
 *
 * Login
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLogin from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { updateField, submitMobileNumber } from './actions';
import LoginScreen from '../../components/Login/LoginScreen';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      syncTriggered: false,
    };
  }

  onChange(e) {
    this.props.updateField({name: e.target.name, val: e.target.value})
  }

  submitMobileNumber() {
    this.props.submitMobileNumber({mobile:this.props.login.loginForm.mobileNumber.value})
  });
  }

  render() {
    return (
      <LoginScreen
        {...this.props}
        onChange={this.onChange.bind(this)}
        submitMobileNumber={this.submitMobileNumber.bind(this)}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
});

function mapDispatchToProps(dispatch) {
  return {
    updateField: datapack => {
      dispatch(updateField(datapack));
    },
    submitMobileNumber: datapack => {
      dispatch(submitMobileNumber(datapack))
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
