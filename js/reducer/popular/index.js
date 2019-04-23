import Types from '../../action/types';
// import ThemeFactory, {ThemeFlags} from "../../res/styles/ThemeFactory";

const defaultState = {
};
/**
 popular:{
 java:{
 items:[],
 isLoading:false
 },
 ios:{
  items:[],
 isLoading:false
 }
 }
 ,.动态设置storeName
 **/
export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.LOAD_POPULAR_SUCCESS:
            return {
                ...state,
            [action.storeName]: {
                ...[action.storeName],
                items:action.items,
                isLoading:false,
        }   };
        case Types.POPULAR_REFRESH:
            return {
                ...state,
                [action.storeName]: {
                    ...[action.storeName],
                    isLoading:true,
                }   };
        case Types.LOAD_POPULAR_FAIL:
            return {
                ...state,
                [action.storeName]: {
                    ...[action.storeName],
                    isLoading:false,
                }   };
        // case Types.SHOW_THEME_VIEW:
        //     return {
        //         ...state,
        //         customThemeViewVisible: action.customThemeViewVisible,
        //     };
        default:
            return state;
    }

}