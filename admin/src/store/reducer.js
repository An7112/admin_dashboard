import { initialState } from "./initalState"
export const actionType = {
    SET_SCREEN_SIZE: 'SET_SCREEN_SIZE',
    SET_THEME_SETTINGS: 'SET_THEME_SETTINGS',
    SET_ACTIVE_MENU: 'SET_ACTIVE_MENU',
    SET_CURRENT_COLOR: 'SET_CURRENT_COLOR',
    SET_CURRENT_MODE: 'SET_CURRENT_MODE'
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
        default:
            return state
    }
}
export default reducer
