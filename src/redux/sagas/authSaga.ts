import axios, { AxiosResponse } from 'axios';
import { call, CallEffect, put, PutEffect } from 'redux-saga/effects';
import { LOGIN_FAILURE, LOGIN_SUCCESS } from '../types';

const loginUserAPI = (loginData: any) => {
    console.log(loginData, "loginData");
    const config = {
        headers: {
            "Content-Type" : "application/json"
        }
    }
    return axios.post('http://localhost:7000/api/v1/auth', loginData, config);
}

function* loginUser(action: any): Generator<CallEffect<AxiosResponse<any>> | PutEffect<{type: string; payload: any;}>, void, any> {
    try {
        const result: any = yield call(loginUserAPI, action.payload);
        console.log(result);
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