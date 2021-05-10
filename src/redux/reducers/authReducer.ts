import { CLEAER_ERROR_FAILURE, CLEAER_ERROR_REQUEST, CLEAER_ERROR_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../types'

export const initalState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user:'',
    userEmail: '',
    userName: '',
    userRole: '',
    errorMsg: '',
    success: ''
}

export const authReducer = (state = initalState, action: any) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                message: '',
                isLoading: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('x-access-token', action.payload.data['x-access-token']);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                userEmail: action.payload.email,
                userRole: action.payload.userRole,
                errorMsg: ''
            }
        case LOGIN_FAILURE:
            localStorage.removeItem('x-access-token');
            return {
                ...state,
                ...action.payload,
                token: null,
                user: null,
                userEmail: null,
                isAuthenticated: false,
                isLoaming: false,
                userRole: null,
                message: action.payload.message
            }
        case CLEAER_ERROR_REQUEST:
            return {
                ...state,
                message: "",
            };
        case CLEAER_ERROR_SUCCESS:
            return {
                ...state,
                message: "",
            };
        case CLEAER_ERROR_FAILURE:
            return {
                ...state,
                message: "",
            };
        default:
            return state;
    }
}

export default authReducer;