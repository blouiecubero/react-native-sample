import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAo76JaKyuTUPGqjsnsbCt2fEQznqpaH1U",
            authDomain: "manager-2d32a.firebaseapp.com",
            databaseURL: "https://manager-2d32a.firebaseio.com",
            projectId: "manager-2d32a",
            storageBucket: "manager-2d32a.appspot.com",
            messagingSenderId: "298837701176"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
