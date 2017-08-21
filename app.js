import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {

    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyB6F2aBWXS8TcpHUBLEwuuLpI5bqbmDufQ',
                authDomain: 'authentication-2738a.firebaseapp.com',
                databaseURL: 'https://authentication-2738a.firebaseio.com',
                projectId: 'authentication-2738a',
                storageBucket: 'authentication-2738a.appspot.com',
                messagingSenderId: '431044313520'
            }
        );
    }

    render() {
        return (
            <View>
                <Header header='Authentication'/>
                <LoginForm/>
            </View>
        );
    }
}