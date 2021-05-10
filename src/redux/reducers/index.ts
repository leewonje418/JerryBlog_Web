import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import authReducer from './authReducer';

const createRootReducer = (history: History<any>) => 
    combineReducers({
        router: connectRouter(history),
        auth: authReducer
    });

export default createRootReducer;