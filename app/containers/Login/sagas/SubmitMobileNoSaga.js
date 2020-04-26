import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import {
    SUBMIT_MOB_DRA,
    SUBMIT_MOB_SA,
    SUBMIT_MOB_API,
    SUBMIT_MOB_DONE
} from '../constants';
import { push } from 'react-router-redux';

// Watcher saga
function* submitMobileNoWorker (action) {
    console.log(action)
    try {
        const httpArgs = [`https://gq2gh1snk0.execute-api.ap-south-1.amazonaws.com/v1/auth/cognito?mobile=${action.dataPack.mobile}`];
        let { data: respData } = yield call(axios.get, ...httpArgs);
        console.log(respData);
        // if (respData.code === '512') {
        //     yield put(push(BUSMaintenance));
        // } else if(respData.code === '200') {
        //     yield put({
        //         type: SUBMIT_MOB_SA,
        //         otpToken: respData.model.token
        //     });
        //     const isOTPPage = location.pathname === BULWithMobOTP;
        //     if (!isOTPPage) {
        //         yield put(push(BULWithMobOTP));
        //     }
        // } else if (respData.code === '463') {
        //     yield put(push(BULMobUnable));
        // } else if (respData.code === '462') {
        //     yield put(push(BULMobMaxTries));
        // } else {
        //     yield put({type: BTOAST_SHOW, msg: respData.msg})
        // } 
    } catch(e) {
        // log({ error: e });
        // yield put({ type: BTOAST_SHOW, msg: e.message });
    } finally {
        // yield put({ type: SUBMIT_MOB_DONE });
    }
}

//Submit login with mobile numeber saga watcher
export default function* submitMobileNoWatcher(action){
    console.log("saga")
    yield takeLatest(SUBMIT_MOB_DRA, submitMobileNoWorker)
}
