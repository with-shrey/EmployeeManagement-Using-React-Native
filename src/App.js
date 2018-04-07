import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import firebase from 'firebase';
import RouterComponent from "./RouterComponent";

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDXn6hTEHSgwL-k9mTR2sIt_u0W2vdh7aM',
            authDomain: 'reactauth-b6716.firebaseapp.com',
            databaseURL: 'https://reactauth-b6716.firebaseio.com',
            projectId: 'reactauth-b6716',
            storageBucket: 'reactauth-b6716.appspot.com',
            messagingSenderId: '453008604431'
        });
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <RouterComponent/>
            </Provider>
        )
    }
}

export default App;

