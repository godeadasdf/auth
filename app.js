import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Card, CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {

    state = {loggedIn: false};

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

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                        </CardSection>
                    </Card>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size='large'/>;

        }

    }

    render() {
        return (
            <View>
                <Header header='Authentication'/>
                {this.renderContent()}
            </View>
        );
    }
}