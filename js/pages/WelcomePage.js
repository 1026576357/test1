/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import  NavigationUtil from "../navigator/NavigationUtil"
type Props = {};
export default class WelcomePage extends Component<Props> {
    componentDidMount(): void {
        this.timer=setTimeout(()=>{
          NavigationUtil.resetToHomePage({
            navigation:this.props.navigation
          })
        },100)
    }
    componentWillMount(): void {
        this.timer&&clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.container}>
             <Text>welcomePage</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
