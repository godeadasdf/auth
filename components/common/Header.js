import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.headerView}>
                <Text>{this.props.header}</Text>
            </View>);
    }
}

const style = StyleSheet.create({
        headerView: {
            shadowColor: '#ddd',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            borderBottomWidth: 2,
            borderColor: '#ddd'
        },
        headerText: {
            textAlign: 'center'
        },
    }
);