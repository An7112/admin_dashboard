import reducer from "./reducer";
import { combineReducers } from "redux";

export const allReducer = combineReducers({
    stateReducer: reducer
})