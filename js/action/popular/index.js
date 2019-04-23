import Types from '../types'
import  DataStore from '../../expand/dao/DataStore'
// import ThemeDao from "../../expand/dao/ThemeDao";


/**
 * 主题变更
 * @param theme
 * @returns {{type: string, theme: *}}
 */
export function onLoadPopularData(storeName,url) {
    return dispatch=>{
        dispatch({type:Types.POPULAR_REFRESH,storeName:storeName});
        let dataStore=new DataStore();
        dataStore.fetchData(url)//异步action
            .then(data=>{
                handlerData(dispatch,storeName,data)
                }
                
            ).catch(error=>{
                console.log(error);
                dispatch({type:Types.LOAD_POPULAR_FAIL,storeName:storeName,error})
        })
    }
}
function handlerData(dispatch,storeName,data) {
dispatch({
    type:Types.LOAD_POPULAR_SUCCESS,
    items:data&&data.data&&data.data.items,
    storeName
})
}
// /**
//  * 初始化主题
//  * @returns {Function}
//  */
// export function onThemeInit() {
//     return dispatch => {
//         new ThemeDao().getTheme().then((data) => {
//             dispatch(onThemeChange(data))
//         })
//     }
// }
// /**
//  * 显示自定义主题浮层
//  * @param show
//  * @returns {{type: *, customThemeViewVisible: *}}
//  */
// export function onShowCustomThemeView(show) {
//     return {type: Types.SHOW_THEME_VIEW, customThemeViewVisible: show};
// }
