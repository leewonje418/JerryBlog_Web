import axios, { AxiosResponse } from 'axios';
import { all, call, CallEffect, fork, put, PutEffect, takeEvery } from 'redux-saga/effects';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../types';

const loginUserAPI = (loginData: any): Promise<AxiosResponse<any>> => {
    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }
    return axios.post('http://localhost:7000/api/v1/auth', loginData, config);
}

function* loginUser(action: any): Generator<CallEffect<AxiosResponse<any>> | PutEffect<{type: string; payload: any;}>, void, any> {
    try {
        const result: any = yield call(loginUserAPI, action.payload);
        yield put({
            type: LOGIN_SUCCESS,
            payload: result.data
        })
    } catch (err) {
        yield put({
            type: LOGIN_FAILURE,
            payload: err.response
        })
    }
}

function* watchLoginUser() {
    yield takeEvery(LOGIN_REQUEST, loginUser);
}

export default function* authSaga() {
    yield all([
        fork(watchLoginUser)
    ])
}