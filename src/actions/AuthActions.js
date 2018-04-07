import {EMAIL_CHANGED, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, PASSWORD_CHANGED,} from "./types";
import firebase from "firebase";
import {Actions} from 'react-native-router-flux';

export const emailChanged = (email) => {
    return {
        type: EMAIL_CHANGED,
        payload: email
    };
};

export const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    };
};

export const loginStart = (status) => {
    return {
        type: LOGIN_START,
        payload: status
    };
};

export const loginSuccess = ({email, password}) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => onSuccessLogin(dispatch, user))
            .catch(() => {
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                        .then(user => onSuccessLogin(dispatch, user))
                        .catch(() => onFailedLogin(dispatch))
                }
            )
    }
};

const onSuccessLogin = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    });
    Actions.main();
};

const onFailedLogin = (dispatch) => {
    dispatch({
        type: LOGIN_FAILED,
        payload: 'Failed'
    })
};