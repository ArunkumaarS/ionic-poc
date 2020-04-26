import { fork } from 'redux-saga/effects';
import submitMobileNoWatcher from './sagas/SubmitMobileNoSaga';

export default function* rootLoginSaga() {
  yield [
    fork(submitMobileNoWatcher),
    // fork(SubmitMobileWatcher),
    // fork(submitMobOTPWatcher),
    // fork(fetchIMEIsWatcher)
  ];
}
