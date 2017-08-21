import React, {Component} from 'react';
import {View,TextInput} from 'react-native';
import {Button, Card, CardSection} from './common';

class LoginForm extends Component {

    state = {text:''};

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        onChangeText=>
                        style={{height:20,width:100}}/>
                </CardSection>
                <CardSection>
                </CardSection>
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    };
}



export default LoginForm;