import { CLEAER_ERROR_REQUEST, CLEAER_ERROR_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../types'

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
                errorMsg: '',
                isLoading: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
                userEmail: action.payload.userEmail,
                userRole: action.payload.userRole,
                errorMsg: ''
            }
        case LOGIN_FAILURE:
            localStorage.removeItem('token');
            return {
                ...state,
                ...action.payload,
                token: null,
                user: null,
                userEmail: null,
                isAuthenticated: false,
                isLoaming: false,
                userRole: null,
                errorMsg: action.payload.data.msg
            }
        case CLEAER_ERROR_REQUEST:
            return {
                ...state,
                errorMsg: "",
            };
        case CLEAER_ERROR_SUCCESS:
            return {
                ...state,
                errorMsg: "",
            };

        case CLEAER_ERROR_SUCCESS:
            return {
                ...state,
                errorMsg: "",
            };
        default:
            return state;
    }
}

export default authReducer;