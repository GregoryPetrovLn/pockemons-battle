import {combineReducers} from "redux";
import {reducer as calculator} from '../views/calculator/redux/reducer'

export const rootReducer = combineReducers({
    calculator
})