import {GET_LIST_POCKEMONS} from "./actionTypes";


const initialState = {
    isLoading: false,
    data: null,
    player:null
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_LIST_POCKEMONS.INIT:
            return {...state, isLoading: true, data: null}
        case GET_LIST_POCKEMONS.SUCCESS:
            return {...state, isLoading: false, data: payload}
        case GET_LIST_POCKEMONS.ERROR:
            return {...state, isLoading: false, data: null}
        default:
            return state
    }
}