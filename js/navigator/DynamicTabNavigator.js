import  {createBottomTabNavigator} from 'react-navigation'
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import  PopularPage from '../pages/PopularPage';
import  TrendingPage from '../pages/TrendingPage';
import  MyPage from '../pages/MyPage';
import  FavoritePage from '../pages/FavoritePage';
import {createAppContainer} from 'react-navigation';
import  MateialIcos from 'react-native-vector-icons/MaterialIcons';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import  Entypo from 'react-native-vector-icons/Entypo';
import  AntDesign from 'react-native-vector-icons/AntDesign';
import NavigationUtil from "../navigator/NavigationUtil";
type Props = {};
import  {BottomTabBar} from "react-navigation-tabs";
import {connect} from 'react-redux';
import TabBarBottom from "react-navigation-tabs/src/views/BottomTabBar";
const TABS={//配置路由页面

        PopularPage:{
            screen:PopularPage,
            navigationOptions:{
                tabBarlable:"最热",
                tabBarIcon:({tintColor,focused})=>(
                    <MateialIcos
                        name={'whatshot'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),
            }
        },
        TrendingPage: {
            screen: TrendingPage,
            navigationOptions: {
                tabBarlable: "趋势",
                tabBarIcon: ({tintColor, focused}) => (
                    <Ionicons
                        name={'md-trending-up'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )
            }
        },

        FavoritePage:{
            screen:FavoritePage,
            tabBarlable:"收藏",
            navigationOptions:{
                tabBarIcon:({tintColor,focused})=>(
                    <AntDesign
                        name={'heart'}
                        size={26}
                        style={{color: tintColor}}
                    />
                )}
        },
        MyPage:{
            screen:MyPage,
            tabBarlable:"我的",
            navigationOptions:{
                tabBarIcon:({tintColor,focused})=>(
                    <Entypo
                        name={'user'}
                        size={26}
                        style={{color: tintColor}}
                    />
                ),}
        }
}
class DynamicTabNavigator extends Component<Props> {
    constructor(props){
        super(props);
        // console.disableYellowBox=true;
    }
    _tabNavigator(){
        if(this.Tabs){
    return this.Tabs;
        }
    const {PopularPage,TrendingPage,FavoritePage,MyPage}=TABS;
    const tabs={PopularPage,TrendingPage,FavoritePage,MyPage};//根据需要显示tab
       PopularPage.navigationOptions.tabBarlable='最热'//动态配置lable;
        return  this.Tabs=createAppContainer(createBottomTabNavigator(tabs,
            {tabBarComponent: props=>{
                return  <TabBarComponent theme={this.props.theme}{...props}/>
                }}),
            );
    }
    render() {

        const Tab=this._tabNavigator();
        return <Tab/>

    }
}
class TabBarComponent extends React.Component{
    constructor(props){
        super(props);
        this.theme={
            tintColor: props.activeTintColor,
            updateTime:new Date().getTime(),
        }
    }
    render(){
        // const {routes,index}=this.props.navigation.state;
        // if(routes[index].params){
        //     const {theme}=routes[index].params;
        //     if(theme&&theme.updateTime>this.theme.updateTime){
        //         this.theme=theme;
        //     }
        // }

        return(
        <BottomTabBar
            {...this.props}
            //this.theme.tintColor||this.props.activeTintColor
            activeTintColor={this.props.theme}
        />)
    }
}


const mapStateToProps = state => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps)(DynamicTabNavigator);
