

import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import NavigationUtil from "../navigator/NavigationUtil";


type Props = {};
export default class MyPage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>我的</Text>
                <Text></Text>
                <Text onPress={()=>{
                    NavigationUtil.goPage({navigation:this.props.navigation},"DetailPage")
                }}>跳转到详情页</Text>
                <Button title={'跳转到Fetch'} onPress={()=>{
                    NavigationUtil.goPage({navigation:this.props.navigation},"FetchDemoPage")
                }}></Button>
                <Button title={'跳转到AsyncStorageDemoPage'} onPress={()=>{
                    NavigationUtil.goPage({navigation:this.props.navigation},"AsyncStorageDemoPage")
                }}></Button>
                <Button title={'跳转到DataStoreDemoPage'} onPress={()=>{
                    NavigationUtil.goPage({navigation:this.props.navigation},"DataStoreDemoPage")
                }}></Button>
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
