import {RESET_CALC_HISTORY, SET_CALC_HISTORY, SET_CALC_RESULT} from "./actionTypes";

const initialState = {
    history: [],
    result: ''
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_CALC_HISTORY:
            return {...state, history: [...state.history, payload]}
        case RESET_CALC_HISTORY:
            return {...state, history: []}
        case SET_CALC_RESULT:
            return {...state, result: payload}
        default:
            return state
    }
}