import  {createStackNavigator,createBottomTabNavigator,createSwitchNavigator,
createMaterialTopTabNavigator} from 'react-navigation'
import  WelcomePage from '../pages/WelcomePage'
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import {createAppContainer} from 'react-navigation';
import  {connect} from 'react-redux'
import {createReactNavigationReduxMiddleware, createReduxContainer} from 'react-navigation-redux-helpers';
import FetchDemoPage from '../pages/FetchDemoPage'
import AsyncStorageDemoPage from  '../pages/AsyncStorageDemoPage'
import DataStoreDemoPage from  '../pages/DataStoreDemoPage'
export  const rootCom='Init';//设置根路由
const  InitNavigator=createStackNavigator({
    WelcomePage:{
    screen:WelcomePage,
        navigationOptions:{
            header:null,
        }
    }
})
const  MainNavigator=createStackNavigator({
    HomePage:{
        screen:HomePage,
        navigationOptions:{
            header:null,
        }
    },
    DetailPage:{
        screen:DetailPage,
        navigationOptions:{
            // header:null,
        }
    },
    FetchDemoPage:{
        screen:FetchDemoPage,
        navigationOptions:{
            // header:null,
        }
    },
    AsyncStorageDemoPage:{
    screen:AsyncStorageDemoPage,
    navigationOptions:{
        // header:null,
    }
},  DataStoreDemoPage:{
        screen:DataStoreDemoPage,
        navigationOptions:{
    // header:null,
}
}
})
export  const  RootNavigator=  createSwitchNavigator({
    Init:InitNavigator,
    Main:MainNavigator,
}, {navigationOptions:{
    header:null,}
})
export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
);

/**
 * 2.将根导航器组件传递给 reduxifyNavigator 函数,
 * 并返回一个将navigation state 和 dispatch 函数作为 props的新组件；
 * 注意：要在createReactNavigationReduxMiddleware之后执行
 */
const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

/**
 * State到Props的映射关系
 * @param state
 */
const mapStateToProps = state => ({
    state: state.nav,//v2
});
/**
 * 3.连接 React 组件与 Redux store
 */
export default connect(mapStateToProps)(AppWithNavigationState);