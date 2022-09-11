import Reducer from "./reducer";
import { combineReducers } from "redux";
import { chatReducer} from "./Chat";
export const allReducer = combineReducers({
    stateReducer: Reducer,
    stateChat: chatReducer,
})