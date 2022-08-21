import {combineReducers} from "redux";
import {reducer as battle} from '../views/battle/redux/reducer'

export const rootReducer = combineReducers({
    battle
})