import {EMAIL_CHANGED, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, PASSWORD_CHANGED} from "../actions/types";

const INITIAL_STATE = {
    email: '',
    password: '',
    user: {},
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {...state, email: action.payload};
            break;
        case PASSWORD_CHANGED:
            return {...state, password: action.payload};
            break;
        case LOGIN_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.password, error: ''};
            break;
        case LOGIN_FAILED:
            return {...state, password: '', loading: false, error: action.payload};
        case LOGIN_START:
            return {...state, error: '', loading: true};
        default:
            return state;
    }
};


