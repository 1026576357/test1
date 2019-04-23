/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,Button, StyleSheet, Text, View} from 'react-native';
import  {connect} from 'react-redux'
import  actions from  '../action/index'
type Props = {};
class TrendingPage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>更</Text>
        <Button title={'改变主题颜色'} onPress={()=>{
           this.props.onThemeChange('#096')
        }}/>
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

});
const mapStateToProps=state=>({

});
const  mapDispatchToProps=dispatch=>({
    onThemeChange: theme=>dispatch(actions.onThemeChange(theme))
})
export  default  connect(mapStateToProps,mapDispatchToProps)(TrendingPage)