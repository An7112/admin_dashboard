
import { initialState } from "./initalState"
export const actionType = {
    SET_SCREEN_SIZE: 'SET_SCREEN_SIZE',
    SET_THEME_SETTINGS: 'SET_THEME_SETTINGS',
    SET_ACTIVE_MENU: 'SET_ACTIVE_MENU',
    SET_CURRENT_COLOR: 'SET_CURRENT_COLOR',
    SET_CURRENT_MODE: 'SET_CURRENT_MODE',
    SET_ACTIVE_CART: 'SET_ACTIVE_CART',
    SET_SEARCH: 'SET_SEARCH',
    SET_ACTIVE_SEARCH: 'SET_ACTIVE_SEARCH',
    SET_STACKED_CHART: 'SET_STACKED_CHART',
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_SCREEN_SIZE:
            return {
                ...state,
                screenSize: action.screenSize
            }
        case actionType.SET_THEME_SETTINGS:
            return {
                ...state,
                themeSettings: action.themeSettings
            }
        case actionType.SET_ACTIVE_MENU:
            return {
                ...state,
                activeMenu: action.activeMenu
            }
        case actionType.SET_CURRENT_COLOR:
            return {
                ...state,
                currentColor: action.currentColor
            }
        case actionType.SET_CURRENT_MODE:
            return {
                ...state,
                currentMode: action.currentMode
            }
        case actionType.SET_ACTIVE_CART:
            return {
                ...state,
                activeCart: action.activeCart
            }
        case actionType.SET_SEARCH:
            return {
                ...state,
                search: action.search
            }
        case actionType.SET_ACTIVE_SEARCH:
            return {
                ...state,
                activeSearch: action.activeSearch
            }
        case actionType.SET_STACKED_CHART:
            return {
                ...state,
                stackedChart: action.stackedChart
            }
        case actionType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser
            }

        default:
            return state
    }
}
export default reducer
