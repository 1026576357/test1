import React, {Component} from 'react';
import {Platform,Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import  {createMaterialTopTabNavigator} from 'react-navigation'
import {createAppContainer} from 'react-navigation';
type Props = {};
import NavigationUtil  from '../navigator/NavigationUtil'
import Ionicons from "react-native-vector-icons/Ionicons";
export default class PopularPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.tabNames=['Java','Android','ios','react'];
    }

    _genTabs() {
        const tabs = {};

        this.tabNames.forEach((item, index) => {
                tabs[`tab${index}`] = {
                    screen:props => <PopularTab {...props} tabLabel={item} />,
                    navigationOptions: {
                        title: item
                    }
                }

        });
        return tabs;
    }

    render() {
        const TabNavigator=createAppContainer(createMaterialTopTabNavigator(
            this._genTabs(),{
            tabBarOptions: {
                tabStyle: styles.tabStyle,
                    upperCaseLabel: false,//是否使标签大写，默认为true
                    scrollEnabled: true,//是否支持 选项卡滚动，默认false
                    style: {
                    backgroundColor: '#678',//TabBar 的背景颜色
                        height: 30//fix 开启scrollEnabled后再Android上初次加载时闪烁问题
                },
                indicatorStyle: styles.indicatorStyle,//标签指示器的样式
                    labelStyle: styles.labelStyle,//文字的样式
            },
            lazy: true
        }
    )
        )
        return <View style={{flex: 1}}>
            <TabNavigator/>
        </View>

    }
}
class PopularTab extends Component<Props> {
    render() {
        const {tabLabel}=this.props;
        return (
            <View >
               
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
    tabStyle: {
        minWidth: 50 //fix minWidth会导致tabStyle初次加载时闪烁
        //   padding: 0
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white'
    },
    labelStyle: {
        fontSize: 13,
        margin: 0,
    },
    indicatorContainer: {
        alignItems: "center"
    },
    indicator: {
        color: 'red',
        margin: 10
    }
});
