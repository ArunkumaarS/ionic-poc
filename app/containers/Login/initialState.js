const initialJSState = {
  isMobileSubmitting: false,
  isMobileSubmitted: false,
  isOtpSubmitting: false,
  isOtpSubmitted: false,
  isTruecallerInfoFetching: false,
  isTruecallerInfoFetched: false,
  loginForm: {
    mobileNumber: {
      value: '',
      errorMessage: '',
      errorvalue: true,
    },
    otp: {
      value: '',
      errorMessage: '',
      errorValue: true,
    },
  },
};

export default initialJSState;
